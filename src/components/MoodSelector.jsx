const moods = [
  { label: "😊 Happy", value: "happy" },
  { label: "😔 Sad", value: "sad" },
  { label: "❤️ Romantic", value: "romance" },
  { label: "💪 Motivation", value: "motivation" },
];

const MoodSelector = ({ onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {moods.map((mood) => (
        <button
          key={mood.value}
          onClick={() => onSelect(mood.value)}
          className="px-5 py-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-blue-500 hover:text-white hover:scale-105"
        >
          {mood.label}
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;