export interface BlogCreationData {
    userId: number;
    title: string;
    summary:string
    metaTitle?: string;
    slug?: string;
    content: string;
    tags?: string[];
    categories?: string[];
    image?: string[];
    status?: 'draft' | 'published' | 'archived';
    createdAt?: Date;
    publishedAt?: Date;
    updatedAt?: Date;
}

export interface BlogListSchema {
    search?: string;
    tag?: string[];
    category?: string[];
  }