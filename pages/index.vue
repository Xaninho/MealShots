<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <h1>Welcome to My Website</h1>
            <p>Thank you for visiting my website. Please take a look around and let me know if you have any questions.</p>
            <button @click="contactMe">Contact Me</button>
        </main>
        <footer>
            <p>&copy; 2021 My Website</p>
        </footer>
    </div>
</template>

<script>

definePageMeta({
      layout: "landing",
  });

export default {
    methods: {
        contactMe() {
            // Replace with your own contact form logic
            alert('Please fill out the contact form on the Contact page.');
        }
    }
}
</script>

<style>
header {
    background-color: #007bff;
    color: #fff;
    padding: 1rem;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
}

nav li {
    margin: 0 1rem;
}

nav a {
    color: #fff;
    text-decoration: none;
}

main {
    padding: 2rem;
    text-align: center;
}

h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

button {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

footer {
    background-color: #f8f9fa;
    padding: 1rem;
    text-align: center;
}
</style>
