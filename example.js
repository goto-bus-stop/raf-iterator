const html = require('nanohtml')
const rafIterator = require('./')

async function main () {
  const canvas = html`
    <canvas width="400" height="400"></canvas>
  `
  const context = canvas.getContext('2d')

  document.body.append(canvas)

  for await (const tick of rafIterator()) {
    context.fillStyle = `hsl(${tick % 360}deg, 60%, 70%)`
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = '#000'
    context.fillText(tick, canvas.width / 2, canvas.height / 2)
  }
}

main()
