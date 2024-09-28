import { Button } from '@nextui-org/react';
import { Outlet, useNavigate } from 'react-router-dom';

export const EventDetails = () => {
  const navigate = useNavigate();

  const back = () => navigate(-1);

  return (
    <div className="mx-auto max-w-4xl p-4 flex flex-col gap-10">
      <Button
        isIconOnly
        className="w-fit text-white bg-neutral-800"
        onClick={back}
      >
        <span className="material-symbols-outlined text-lg">arrow_back</span>
      </Button>
      <Outlet />
    </div>
  );
};
