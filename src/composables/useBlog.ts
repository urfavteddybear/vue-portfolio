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

// Fallback articles if API fails
const getFallbackArticles = (): Article[] => [
  {
    id: 'fallback-1',
    title: "DevOps Best Practices for Modern Applications",
    excerpt: "Exploring containerization, orchestration, and CI/CD pipelines for scalable infrastructure solutions.",
    date: "2024-12-01",
    category: "DevOps",
    url: "https://blog.wahyuputra.biz.id/",
    featured: true
  },
  {
    id: 'fallback-2',
    title: "Linux Server Administration Guide",
    excerpt: "A comprehensive guide to managing Linux servers, security hardening, and performance optimization.",
    date: "2024-11-15",
    category: "Linux",
    url: "https://blog.wahyuputra.biz.id/",
    featured: true
  },
  {
    id: 'fallback-3',
    title: "Docker Container Security Best Practices",
    excerpt: "Learn how to secure Docker containers in production environments with proven security practices.",
    date: "2024-10-20",
    category: "Docker",
    url: "https://blog.wahyuputra.biz.id/",
    featured: false
  },
  {
    id: 'fallback-4',
    title: "Kubernetes Cluster Management Essentials",
    excerpt: "Essential techniques for managing and monitoring Kubernetes clusters in production.",
    date: "2024-09-15",
    category: "Kubernetes",
    url: "https://blog.wahyuputra.biz.id/",
    featured: false
  }
]

export async function getBlogPosts(): Promise<{ articles: Article[], error: string | null }> {
  try {
    // Use proxy in development, direct API in production
    const apiUrl = import.meta.env.DEV 
      ? '/api/blog' 
      : 'https://blog.wahyuputra.biz.id/api/posts'
    
    // Fetch from external API
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Portfolio-Site/1.0',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: BlogApiResponse = await response.json()

    if (data.success && data.posts) {
      // Sort posts by date (newest first) and take top 4
      const articles = data.posts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 4)
        .map((post, index) => transformBlogPost(post, index))
      
      return { articles, error: null }
    } else {
      throw new Error('Invalid API response format')
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    
    // Return fallback content
    const fallbackArticles = getFallbackArticles()
    return { 
      articles: fallbackArticles, 
      error: null // Don't show error to user, just use fallback
    }
  }
}
