import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_TOKEN })

export async function fetchDevicesFromNotion() {
  const databaseId = process.env.NOTION_DATABASE_ID!

  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 100,
  })

  return response.results.map((page: any) => {
    const props = page.properties
    return {
      name: props.Name?.title[0]?.plain_text || '',
      category: props.Category?.select?.name || '',
      cover: page.cover?.external?.url || page.cover?.file?.url || '',
      description: props.Description?.rich_text[0]?.plain_text || '',
      link: props.Link?.url || '',
    }
  })
}
