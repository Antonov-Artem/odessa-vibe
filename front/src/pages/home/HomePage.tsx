import { useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') navigate('/events');
  }, [location]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 left-0 z-50 bg-opacity-90 backdrop-blur border-b border-neutral-800 bg-neutral-950">
        <div className="mx-auto h-16 px-4 max-w-[900px] flex items-center justify-center gap-2">
          <div className="h-7 w-7 flex rounded-md">
            <div className="w-full h-full bg-[#e81717] rounded-l-md" />
            <div className="w-full h-full bg-white" />
            <div className="w-full h-full bg-[#e8c917] rounded-r-md" />
          </div>
          <p className="font-bold text-white">Odesa Events</p>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
