document.addEventListener('DOMContentLoaded', () => {
  
  //all Elements
  let seconds = 0
  const plusButton = document.getElementById('plus')
  const minusButton = document.getElementById('minus')
  const counter = document.getElementById('counter')
  const heart = document.getElementById('heart')
  const pause = document.getElementById('pause')
  let likeList = document.querySelector('.likes')
  const form = document.getElementById('list')
  const submitButton = document.getElementById('comment-form')
  let clicks = 0
  let intervalID = window.setInterval(startTime, 1000)
  let paused = false


  function startTime(){
    counter.innerText++
  }
  //plus button
  plusButton.addEventListener('click', () =>{
    counter.innerText++
  })
  //minus button
  minusButton.addEventListener('click', () =>{
    counter.innerText--
  })
  //heartButton
  function likes(){
    let likeComment = document.createElement('li')
    likeList.append(likeComment)
    ++clicks
    heart.onclick = setTimeout(() => {clicks = 0},1000)
    if (clicks===1){
      likeComment.innerText= counter.innerText + ' has been liked '+ `${clicks}` +' time'
      likeList.append(likeComment)
    }
    else {

      likeComment.innerText = counter.innerText + ` has been liked ${clicks} times.`
      likeList.append(likeComment)
    }
    
    }
  


  
  heart.addEventListener('click', likes)
  pause.addEventListener('click', pauser)
  submitButton.addEventListener('submit', makeComment)

  function pauser(){
    paused=!paused
    if (paused){
      clearInterval(intervalID)
      plusButton.disabled = true
      minusButton.disabled = true
      heart.disabled = true
      pause.innerText='resume'
    }
    else {
      intervalID = setInterval(startTime, 1000)
      plusButton.disabled = false
      minusButton.disabled = false
      heart.disabled = false
      pause.innerText = 'pause'
    }
  }
  
  //make a comment
  function makeComment(e){
    e.preventDefault()
    const commentList = document.createElement('ul')
    commentList.innerText = document.getElementById('comment-input').value
    form.append(commentList)

  }
  
  })

  

