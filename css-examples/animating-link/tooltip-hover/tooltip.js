let anchors = document.querySelectorAll('.anchor-tooltip')
anchors.forEach(function (anchor) {
  let tooltipText = anchor.getAttribute('title')
  let tooltip = document.createElement('span')
  tooltip.className = 'title-tooltip'
  tooltip.innerHTML = tooltipText
  anchor.appendChild(tooltip)
})
