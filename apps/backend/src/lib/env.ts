import * as v from 'valibot'

const schema = v.object({
  DATABASE_URL: v.pipe(
    v.string(),
    v.nonEmpty(),
    v.url(),
    v.startsWith('postgres'),
  ),
})

export const env = v.parse(schema, process.env)
