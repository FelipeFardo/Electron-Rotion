export interface Document {
  id: string
  title: string
  content: string
}

/**
 * Request
 */

/**
 * Responses
 */

export interface FetchAllDocumentsResponse {
  data: Document[]
}
