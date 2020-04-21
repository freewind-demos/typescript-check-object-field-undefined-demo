type User = {
  name?: string
}

const user: User = {}

function hello(name: string): void {
  console.log(`Hello, ${name}`);
}

if (user.name) {
  hello(user.name);

  [1, 2, 3].forEach(() => {
    hello(user.name);
  })
}
