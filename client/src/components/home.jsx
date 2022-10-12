import { useState, useEffect } from 'react';
import Card from "./card";
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
  // useEffect(
  //     function () {

  //     },
  //     [ ]
  // );
  var numbers = [1, 2, 3, 4, 5 ,6]; 

  return (
    <>
      <ul class="flex m-5">
        <li class="mr-3 bg-gray-200 rounded-md">
          <a
            class="w-28 inline-block text-center rounded-md py-1 bg-emerald-800 text-white"
            href="#"
          >
            Write-ups
          </a>
          <a
            class="w-28 inline-block text-center rounded-md hover:border-gray-200  py-1 px-3"
            href="#"
          >
            Forums
          </a>
        </li>
        <li class="mr-3  bg-gray-200 rounded-md">
          <a class="w-28 inline-block text-center py-1 px-3 " href="#">
            New
            <span className="ml-2">
              <AddIcon />
            </span>
          </a>
        </li>
      </ul>


      <div class="grid grid-cols-3 grid-rows-2 gap-4">
  {numbers.map(()=>{
return(
  <Card/>
)
  })}

</div>
      
    </>
  );
};

export default Home;
