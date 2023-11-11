$(function () {
  $(window).mouseleave(function (e) {
    const modalSeen = sessionStorage.getItem('modalSeen')
    console.log('mouseleave')
    if (e.toElement == null && !modalSeen) {
      document.documentElement.classList.add('mouse-out')
    }
  })

  $('#close-modal').click(function (e) {
    e.preventDefault()
    console.log('modal closed')
    document.documentElement.classList.remove('mouse-out')
    sessionStorage.setItem('modalSeen', true)
  })
})
