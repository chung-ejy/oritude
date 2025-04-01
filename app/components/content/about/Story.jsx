import React from "react";
import StoryImage from "../../../assets/our_story.png"; // Import the image component
import HorizontalBarWrapper from "../../wrappers/HorizontalBarWrapper";

const Story = () => {
  return (
    <HorizontalBarWrapper bgColor="bg-white">
          <div className="col-md-6">
            <img src={StoryImage} alt="Empowering Financial Education" className="img-fluid rounded shadow w-75" />
          </div>
          <div className="col-md-6">
            <p className="text-start text-dark">
              Oritude was born from a desire to bring clarity to the often chaotic and intimidating world of financial education and investment. The idea emerged from a critical analysis of current market conditions and the challenges individuals face in navigating them.
            </p>
            <p className="text-start text-dark">
              In today’s dynamic and evolving economic landscape, individuals and families face a variety of financial challenges. While investing platforms have made markets more accessible than ever, the abundance of options can feel overwhelming. Navigating this complexity requires tools and resources that foster clarity, confidence, and a thoughtful approach to long-term financial stability.
            </p>
            <p className="text-start text-dark">
              Oritude's mission is rooted in the recognition that investing is more than just a financial endeavor—it’s an opportunity to develop life-enriching habits. By fostering calm, clear, and consistent approaches, the principles of investing become a foundation for thoughtful decision-making, problem-solving, and personal growth across all aspects of life.
            </p>
            <p className="text-start text-dark">
              Oritude is not just a platform—it’s a movement to normalize investing as a skill that transcends markets, promoting clarity and empowerment in everyday decisions.
            </p>
            </div>
      </HorizontalBarWrapper>
  );
};

export default Story;