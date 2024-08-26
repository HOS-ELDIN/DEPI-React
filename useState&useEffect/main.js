function useState(initialValue) {
  // Store the current state value
  let state = initialValue;

  // Function to update the state
  function setState(newValue) {
      state = newValue;
      render(); // Call the render function to update the UI
  }

  // Return the current state and the function to update it
  return [() => state, setState];
}

function useEffect(effect, dependencies) {
  let hasRun = false;
  let prevDependencies = [];

  function runEffect() {
      const hasChanged = dependencies.some((dep, i) => dep !== prevDependencies[i]);
      if (!hasRun || hasChanged) {
          effect();
          prevDependencies = [...dependencies];
          hasRun = true;
      }
  }

  return runEffect;
}