const Fasilities: React.FC<FacilitiesResponse> = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="rounded-lg flex items-center justify-center mb-2">
        {icon}
      </div>
      <p className="text-sm font-medium text-gray-700">{name}</p>
    </div>
  );
};

export default Fasilities;
