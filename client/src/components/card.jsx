
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import VerifiedIcon from '@mui/icons-material/Verified';

import Dropdown from "./dropdown";
const Card=()=>{
    return (

        <>
<div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-3 py-4 ">
          <img
            className="w-14 rounded-md inline-block"
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
            alt="Sunset in the mountains"
          />
          <div className="inline-block align-middle p-3">
            <div className="inline-block">
              <p className="inline font-semibold">Saiteja Thoshakani</p>
              <VerifiedIcon
                sx={{ fontSize: 15 }}
                className=" ml-3 text-emerald-600"
              />
            </div>
            <div className="block">
              <p className="inline text-zinc-500">Machine Learning Engineer</p>
            </div>
          </div>
        <Dropdown />
          </div>

        <div className="px-3 pb-4">
          <div className="bg-stone-200 rounded-md px-2 py-3 font-medium">
            <p>
              why Do Energy level converge to a continuum and what is continuum?
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-sm pt-3 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Like{' '}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            views{' '}
          </span>
          <div className="float-right">
            <ExitToAppIcon />
          </div>
        </div>
      </div>
        </>
    );
}
export default Card;

