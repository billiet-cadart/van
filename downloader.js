const scriptElement = document.querySelector('script[type="application/ld+json"][data-next-head]')

if (scriptElement) {
  try {
    const data = JSON.parse(scriptElement.textContent)

    // Extract filename using string splitting with a fallback
    const rawFilename = data.url ? data.url.split('/').at(-1) : 'download'
    const filename = rawFilename.endsWith('.json') ? rawFilename : `${rawFilename}.json`

    // Trigger download
    const blob = new Blob([scriptElement.textContent], { type: 'application/json' })
    const objectUrl = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = objectUrl
    link.download = filename
    link.click()

    URL.revokeObjectURL(objectUrl)
  }
  catch (error) {
    console.error('Failed to parse JSON or trigger download:', error)
  }
}
