import React, { Component } from "react";

class WiseSquare extends Component {
  dispenseWisdom() {
    let messages = [
      "The true secret of happiness lies in taking a genuine interest in all the details of daily life",
      "The secret of your success is determined by your daily agenda",
      "It's not the daily increase but daily decrease. Hack away at the unessential.",
      "I am blessed to have so many great things in my life - family, friends and God. All will be in my thoughts daily.",
      "Your daily life is your temple and your religion. When you enter into it take with you your all.",
      "True love brings up everything - you're allowing a mirror to be held up to you daily.",
      "Our character is basically a composite of our habits. Because they are consistent, often unconcious patterns, they constantly, daily, express our character.",
      "The past is never the past. It is always present. And you better reckon with it in your life and in your daily experience, or it will get you. It will get you really bad.",
    ];
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[rIndex]);
  }

  render() {
    return (
      <div className="wise-square" onMouseEnter={this.dispenseWisdom}>
        😀
      </div>
    );
  }
}

export default WiseSquare;

