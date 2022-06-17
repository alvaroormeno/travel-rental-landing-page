

function App() {
  return (
    <div>
      {/* SECTION 1 */}
      <div className="bg-slate-700 text-white px-8 py-16">
        {/* CONTAINER for text and button */}
        <div className="border-2 border-green-300 max-w-xl grid grid-cols-1 gap-8">
          <h2 className="text-xl uppercase font-bold">Become a Host</h2>
          <div className="text-6xl font-bold">Host your space, share your world</div>
          <p className="text-lg">
            The art of hosting is rooted in the thoughtful design. 
            Share your unique aesthetic with guests and extra income on a schedule that works for you.
          </p>
          <button className="bg-purple-500 py-3 px-6 text-lg rounded-md w-48">Try hosting</button>
        </div> 
      </div>
      
        
      <h2>Your next chapter, made possible by Hosting</h2>
      <h3>Share what you love</h3>
      <p>
        Indulge your love for design when you host Airbnb guests, who are drawn to authentic travel in creativelu curated
      </p>
      <h3>Host how you want to</h3> 
      <p>Airbnb gives your the tools and support to earn extra income, be your own boss and invest in your passions</p>

    </div>

  );
}

export default App;