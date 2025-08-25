// Composable for blog API functionality
interface BlogPost {
  id: string
  title: string
  date: string
  description: string
  tags: string[]
}

interface BlogApiResponse {
  success: boolean
  count: number
  posts: BlogPost[]
}

export interface Article {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  url: string
  featured: boolean
}

// Function to get primary category from tags
const getPrimaryCategory = (tags: string[]): string => {
  const categoryMap: { [key: string]: string } = {
    'react': 'React',
    'nextjs': 'Next.js',
    'javascript': 'JavaScript',
    'typescript': 'TypeScript',
    'css': 'CSS',
    'design': 'Design',
    'ui': 'UI/UX',
    'ux': 'UI/UX',
    'backend': 'Backend',
    'frontend': 'Frontend',
    'devops': 'DevOps',
    'docker': 'DevOps',
    'kubernetes': 'DevOps',
    'linux': 'Linux',
    'tutorial': 'Tutorial',
    'guide': 'Guide'
  }

  for (const tag of tags) {
    const category = categoryMap[tag.toLowerCase()]
    if (category) return category
  }
  
  // Return capitalized first tag if no mapping found
  return tags[0] ? tags[0].charAt(0).toUpperCase() + tags[0].slice(1) : 'Blog'
}

// Function to transform blog post to article format
const transformBlogPost = (post: BlogPost, index: number): Article => ({
  id: post.id,
  title: post.title,
  excerpt: post.description,
  date: post.date,
  category: getPrimaryCategory(post.tags),
  url: `https://blog.wahyuputra.biz.id/posts/${post.id}`,
  featured: index < 2 // Mark first 2 posts as featured
})

export async function getBlogPosts(): Promise<{ articles: Article[], error: string | null }> {
  try {
    // Use proxy in development, try multiple approaches in production
    let finalUrl: string
    let fetchOptions: RequestInit
    
    if (import.meta.env.DEV) {
      // Development - use Vite proxy
      finalUrl = '/api/blog'
      fetchOptions = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        cache: 'no-cache'
      }
    } else {
      // Production - try CORS proxy first, then direct
      const timestamp = Date.now()
      
      // Try using allorigins.win as CORS proxy
      finalUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://blog.wahyuputra.biz.id/api/posts?t=${timestamp}`)}`
      fetchOptions = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        cache: 'no-cache'
      }
    }
    
    console.log('Environment:', import.meta.env.DEV ? 'development' : 'production')
    console.log('Fetching from URL:', finalUrl)
    
    const response = await fetch(finalUrl, fetchOptions)

    console.log('Response status:', response.status)

    if (!response.ok) {
      console.error('API response not OK:', response.status, response.statusText)
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`)
    }

    let data: BlogApiResponse

    if (import.meta.env.DEV) {
      // Development - direct API response
      data = await response.json()
    } else {
      // Production - unwrap from CORS proxy
      const proxyResponse = await response.json()
      if (proxyResponse.status && proxyResponse.status.http_code === 200) {
        data = JSON.parse(proxyResponse.contents)
      } else {
        throw new Error('CORS proxy failed')
      }
    }
    
    console.log('API data received:', data)

    if (data.success && data.posts && Array.isArray(data.posts)) {
      console.log('Number of posts received:', data.posts.length)
      
      // Sort posts by date (newest first) and take top 4
      const articles = data.posts
        .sort((a, b) => {
          const dateA = new Date(a.date).getTime()
          const dateB = new Date(b.date).getTime()
          console.log(`Sorting: ${a.title} (${a.date}) vs ${b.title} (${b.date})`)
          return dateB - dateA // Newest first
        })
        .slice(0, 4)
        .map((post, index) => transformBlogPost(post, index))
      
      console.log('Final articles after sorting:', articles.map(a => ({ title: a.title, date: a.date })))
      return { articles, error: null }
    } else {
      console.error('Invalid API response format:', data)
      throw new Error(`Invalid API response format: ${JSON.stringify(data)}`)
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    
    // Return empty array and show error instead of fallback
    return { 
      articles: [], 
      error: `Failed to load articles: ${error instanceof Error ? error.message : 'Unknown error'}`
    }
  }
}
