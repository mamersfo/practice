export function fetchExercises() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        exercises: [{
          id: 0,
          name: 'Doelschietspel',
          done: false
        }, {
          id: 1,
          name: 'Rondo',
          done: false
        }]
      })
    }, 1000);
  })
}
