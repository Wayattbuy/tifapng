async function loadFeed(){
const res = await fetch('/api/feed')
const posts = await res.json()

const feed = document.getElementById('feed')

posts.forEach(post=>{
const div = document.createElement('div')
div.className='post'

div.innerHTML=`
<img src="${post.image}">
<h3>${post.title}</h3>
<div class="actions">
<button>Like</button>
<button>Commenter</button>
<button>Partager</button>
</div>
`

feed.appendChild(div)
})
}

loadFeed()
