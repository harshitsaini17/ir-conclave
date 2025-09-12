const PanelMemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="mb-4">
        <img 
          src={member.image || '/images/default-avatar.jpg'} 
          alt={member.name}
          className="w-24 h-24 rounded-full mx-auto object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
      <p className="text-sm text-gray-600">{member.role}</p>
    </div>
  );
};

export default PanelMemberCard;
