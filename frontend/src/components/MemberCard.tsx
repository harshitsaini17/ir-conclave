const MemberCard = ({ member }) => {
  const getInstitution = (role) => {
    const match = role.match(/IIT\s+\w+/);
    return match ? match[0] : 'DAAD';
  };

  const getInstitutionColor = (institution) => {
    const colors = {
      'IIT Kharagpur': 'bg-green-100 text-green-800',
      'IIT Bombay': 'bg-blue-100 text-blue-800',
      'IIT Delhi': 'bg-red-100 text-red-800',
      'IIT Madras': 'bg-purple-100 text-purple-800',
      'IIT Roorkee': 'bg-yellow-100 text-yellow-800',
      'IIT Guwahati': 'bg-indigo-100 text-indigo-800',
      'DAAD': 'bg-orange-100 text-orange-800'
    };
    return colors[institution] || 'bg-gray-100 text-gray-800';
  };

  const institution = getInstitution(member.role);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-900 text-sm">{member.name}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getInstitutionColor(institution)}`}>
          {institution}
        </span>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed">{member.role}</p>
    </div>
  );
};

export default MemberCard;
