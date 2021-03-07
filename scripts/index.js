document.addEventListener('DOMContentLoaded', (_) => {
    const questions = document.querySelectorAll('.faq');
    questions.forEach((q) => {
        q.addEventListener('click', (e) => {
            q.classList.toggle('faq-active');
            q.nextElementSibling.classList.toggle('hide') // answer element
        })
    })
})