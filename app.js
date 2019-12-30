const addElementsLast = () => {
  console.log('Inserting elements at the end of the array: ');
  console.log('Push Method is used!');
  let array = [1, 2, 3, 4];
  console.log(array);
  array.push(10);
  console.log(array);
  console.log('\n');
};

const addElementsFirst = () => {
  console.log('Adding elements to the first of lists:');
  console.log('Unshift method is used: ');

  array = [1, 5, 6, 9, 7];
  console.log(array);
  array.unshift(564);
  console.log(array);
  console.log('\n');
};

const removeElementFirst = () => {
  console.log('For removing elements from the last: ');
  console.log('pop method is used!');
  array = [1, 5, 7, 4, 6, 78];
  console.log(array);
  array.pop();
  console.log(array);
  console.log('\n');
  console.log('\n');
};

const removeElementLast = () => {
  console.log('For removing elements from the first: ');
  console.log('shift method is used');
  array = [45, 6, 3, 96, 85, 96, 5];
  console.log(array);
  array.shift();
  console.log(array);
  console.log('\n');
  console.log('\n');
};

const removeElementsAndReplaceAtAnyPosition = () => {
  console.log('Splice Method can remove elements from a starting position');
  console.log('It can also remove n numbers of elements from there');
  console.log('It can also replace them with anything');
  array = [45, 58, 696, 31, 74, 58, 4596];
  console.log(array);
  array.splice(0, 2, ['Hello', 'World']);
  console.log(array);
  console.log('\n');
  console.log('\n');
};

const basicCopyArrayElements = () => {
  console.log('For basically copying array and creating a new one: ');
  console.log('slice method is used!');
  console.log('Also we can select start and end index ( not included ) :');
  array = [52, 63, 69, 87, 65, 31, 557, 635];
  console.log(array);
  newArray = array.slice();
  array.push('New Element Push to Previous Array');
  newArray.push('New Element Push to Copied Array');
  console.log(array);
  console.log(newArray);
  console.log('\n');
  console.log('\n');
};

const addingElementsAndCopying = () => {
  console.log('concat method adds an array to existing array');
  console.log('It also copies the previous array into new one');
  array = [52, 63, 41, 74, 85, 96, 65, 4120];
  console.log(array);

  copy = [1, 2, 3, 6, 4, 5];
  console.log(copy);

  newCopy = array.concat(copy);
  console.log(newCopy);
  console.log('\n');
  console.log('\n');
};

const findReferenceInArray = () => {
  console.log('for finding values we can use indexOf and includes but');
  console.log(
    'for finding objects in the function we have to use find function: returns the object'
  );
  console.log(
    'for finding object index in the function we have to use findIndex function: returns the index'
  );
  personData = [];
  personData.push({ name: 'Somraj' });
  personData.push({ name: 'Jagriti' });
  console.log(personData);
  object = personData.find((person, index, personObject) => {
    return person.name === 'Somraj';
  });
  console.log(object);
  objectIndex = personData.findIndex((person, index, personObject) => {
    return person.name === 'Somraj';
  });
  console.log(objectIndex);
  console.log('\n');
  console.log('\n');
};

const transformingArrayDataAndReturningNewArray = () => {
  console.log('For changing the data of all elements with a function ');
  console.log('forEach and map both can be used in same way');
  console.log('but forEach changes the original');
  console.log('whereas map returns a new array');
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(array);
  newArray = array.map((element, index, elements) => {
    return element * element;
  });
  console.log(newArray);
  console.log(array);
  console.log('\n');
  console.log('\n');
  console.log('\n');
};

const sortingNumbersOfArray = () => {
  console.log('Sorting is easy in js with sort method');
  console.log('but by default js sorts the characters in alpha');
  console.log('for numeric sorting we have to pass a and b value ');
  console.log('IT RETURNS A NEW ARRAY'.toLowerCase());

  array = [96, 85, 74, 85, 742, 963, 85241, 5263, 4152, 52, 654, 41];
  console.log(array);
  newArray = array.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });
  console.log(newArray)
};

addElementsLast();
addElementsFirst();

removeElementFirst();
removeElementLast();

removeElementsAndReplaceAtAnyPosition();

basicCopyArrayElements();
addingElementsAndCopying();

findReferenceInArray();

transformingArrayDataAndReturningNewArray();

sortingNumbersOfArray();
