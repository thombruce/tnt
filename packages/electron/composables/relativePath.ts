export const relativePath = (path) => {
  return path.replace(process.env.PORTABLE_EXECUTABLE_DIR, '')
}
