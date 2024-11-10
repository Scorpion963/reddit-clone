import { useState } from "react";
import SearchInput from "../SearchInput";
import topicsData from "./topics.json";
import Button from "../Button";
import { RxCross2 } from "react-icons/rx";

const MAX_TOPICS = 3;

export default function ThirdStep({ isVisible }: { isVisible: boolean }) {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [tooManyTopicsError, setTooManyTopicsError] = useState(false);
  const [input, setInput] = useState("")

  const handleSelectTopic = (name: string) => {
    if (selectedTopics.includes(name)) {
      setSelectedTopics((prev) => prev.filter((item) => item !== name));
      setTooManyTopicsError(false);
    } else {
      if (selectedTopics.length < MAX_TOPICS) {
        setSelectedTopics((prev) => [...prev, name]);
      } else {
        setTooManyTopicsError(true);
      }
    }
  };

  return (
    <div className={`${isVisible ? "block" : "hidden"}`}>
      <p className="break-words">
        Add up to 3 topics to help interested redditors find your community.
      </p>
      <SearchInput onChange={(e) => setInput(e.target.value.replace(/\s+/g, ""))} />
      <h4 className="pt-2 text-lg font-bold">
        Topics {selectedTopics.length}/3
      </h4>
      <div className="h-12 w-full">
        <div className="flex gap-2">
          {selectedTopics.map((item, index) => (
            <button
              key={item + index}
              type="button"
              onClick={() => handleSelectTopic(item)}
              className="border border-border/50 bg-background flex items-center gap-2 px-2 py-1"
            >
              {item}
              <RxCross2 />
            </button>
          ))}
        </div>

        {tooManyTopicsError && (
          <p className="text-red-500">You can select up to 3 topics only.</p>
        )}
      </div>
      <div className="h-72 overflow-y-scroll">
        {topicsData.categories.map((item, index) => (
          <TopicsContainer
            key={index}
            topics={item.topics}
            name={item.name}
            handleSelectTopic={handleSelectTopic}
            selectedTopics={selectedTopics}
            input={input}
          />
        ))}
      </div>
    </div>
  );
}

function TopicsContainer({
  topics,
  name,
  handleSelectTopic,
  selectedTopics,
  input,
}: {
  topics: string[];
  name: string;
  handleSelectTopic: (s: string) => void;
  selectedTopics: string[];
  input: string;
}) {
  const categoryMatchesInput = name.toLowerCase().includes(input.toLowerCase());
  const anyTopicVisible = topics.some((topic) =>
    topic.toLowerCase().includes(input.toLowerCase())
  );

  if (!categoryMatchesInput && !anyTopicVisible) return null;

  return (
    <div className="space-y-2 py-4">
      <Button
        type="button"
        onClick={() => handleSelectTopic(name)}
        variant="primary"
        className={`${selectedTopics.includes(name) ? "opacity-50 hover:bg-primary/100" : ""}`}
      >
        {name}
      </Button>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => {
          const match = categoryMatchesInput || topic.toLowerCase().includes(input.toLowerCase());

          return match && (
            <Button
              key={topic}
              type="button"
              onClick={() => handleSelectTopic(topic)}
              variant="secondary"
              className={`${selectedTopics.includes(topic) ? "opacity-70" : ""}`}
            >
              {topic}
              {selectedTopics.includes(topic) && <RxCross2 />}
            </Button>
          );
        })}
      </div>
    </div>
  );
}