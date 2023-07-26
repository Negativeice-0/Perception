//const Hello = (props) => {
//
//  console.log(props)
//  return (
//    <div>
//      <p>
//
//        Hello {props.name}, you are {props.age} years old
//      </p>
//    </div>
//  )
//}
//
//const Footer = () => {
//  return (
//    <div>
//      greeting app created by <a href='https://github.com/mluukkai'>Gates</a>
//    </div>
//  )
//}
//
//const App = () => {
//
//  const name = 'Peter'
//  const age = 10
//  const cars = [
//    { name: 'Ferarri', price: "$500,000" },
//    { name: 'Koenigsegg Gemera', price: "$1.9 million" },
//  ]
//
//  return (
//   // <div> because we have div at hello and footer above
//   <> 
//      <h1>Greetings</h1>
//
//      <Hello name='Maya' age={26 + 10} />
//      <Hello name={name} age={age} />
//      <div>
//        <p>{cars[0].name} {cars[0].price}</p>
//        <p>{cars[1].name} {cars[1].price}</p>
//      </div>
//      <Footer />
//    </>
//    // </div> the object(name,age) are primitive values to be 
//    // rendered in braces as numbers or strings
//  )
//}
//
//export default App

const App = () => {
  // const-definitions
const course = {
 name:  "Half Stack application development",
 parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}
  return (
  <>
  <Header course={course.name} />
  <Content course={course} />
  </>
  )
}

const Header = (props) => {
   console.log(props)
   return (
     <h1>
         Hello and welcome to {props.course}
     </h1>
   )
  }

  const Content = ({course}) => {
    return (
    <div>
        {course.parts.map(part => (
        <p key={part.name}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
    )
  }

  export default App

// BobyHadz.com really saved me here with
//// Pass an object as props to a component in React.js
//// (A tried as an array as friends up there, but this is nice too)
//// To learn more about arrays visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//
//  const Content = () => {
//    const obj1= {name: "part1", level: "exercise1",
//message: "Fundamentals of React", number: 7}
//const obj2= {name: "part2", level: "exercise2",
//message: "Using props to pass data", number: 14}
//const obj3= {name: "part3", level: "exercise3",
//message: "State of a component", numner: 28}
//    return (
//      <div>
//        <Part data={obj1} />
//        <Part data={obj2}/>
//        <Part data={obj3}/>
//      </div>
//    )
//  }
//
//    function Part({data}) {
//      console.log(data); // 👉️ ['A']
//      return (
//        <div>
//         <h1>{data.name}</h1>
//         <h2>{data.level}</h2>
//         <h3>{data.message}</h3>
//        </div>
//      );
//    }
//
//export default App

/* Node.js is a JavaScript runtime environment 
based on Google's Chrome V8 JavaScript engine
 and works practically anywhere
  - from servers to mobile phones.
  The code is written into files ending with .js
   that are run by issuing the command
    node name_of_file.js */
