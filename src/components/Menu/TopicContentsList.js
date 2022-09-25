import React from "react";

import styles from "./TopicContentsList.module.css";
import TopicContent from "./TopicContent";

const TopicContentsList = (props) => {
  // const [title, setTitle] = useState('');
  // const filterTitleHandler = (title) => {
  //   console.log(title);
  //   setTitle(title);
  // }
  // const filterTitleVerses = props.verses.filter((verses) => {
  //   return verses.title === title;
  // });

  return (
    <div className={styles.contents}>
      {props.topics.map((topic) => (
        <TopicContent
          key={topic.label}
          label={topic.label}
          subLabels={topic.subLabel}
          // onChangeFilter={filterTitleHandler}
          verses={props.verses}
        />
      ))}
    </div>
  );
};

export default TopicContentsList;
