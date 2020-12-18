import './App.css';

function App() {
  return (
    <div className="App">
          <h2 class="text-xl font-semibold text-white 
                      sm:text-2xl sm:leading-7 sm:text-black 
                      md:text-3xl">
          Visual Studio Code Cheat Sheet</h2>

          <div>
  <div class="mt-1 relative rounded-md shadow-sm">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      
    </div>
    <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="placeholdergoeshere"/>
    <div class="absolute inset-y-0 right-0 flex items-center">
      <label for="currency" class="sr-only">Currency</label>
      <select id="Currency" name="currency" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
        <option>Keybind</option>
        <option>Action</option>
      </select>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
