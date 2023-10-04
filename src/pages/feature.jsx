import { useGetHistoryQuery } from "@/redux/chatSlice/chatApi";
import React from "react";
import { useSelector } from "react-redux";


const Feature = () => {
  const { token } = useSelector((state) => state.chat);
  const { data, isSuccess, isLoading, isError, error } = useGetHistoryQuery(token)
  console.log({ historyDAta: data })
  return (
    <div className="bg-[#069C6F]">
      <div className="w-9/12 mx-auto py-8 text-white">
        {" "}
        <p className="mb-5">
          In the realm of environmental stewardship, the utilization of
          comprehensive and interconnected databases has emerged as an
          indispensable tool for fostering informed decision-making and driving
          positive change on a global scale. This intricate web of data
          repositories encompasses an array of invaluable sources, including
          repositories of environmental treaties, European Union (EU)
          legislation, United Nations Environment Programme (UNEP) data, and
          records of UN negotiations. The amalgamation of these diverse datasets
          forms a bedrock of knowledge, from which a deeper understanding of
          environmental issues and trends can be extracted.
        </p>
        <p className="mb-5">
          At the heart of this data ecosystem lies an extensive compilation of
          environmental treaties. These treaties, ranging from the Paris
          Agreement to the Kyoto Protocol, are meticulously cataloged within
          dedicated databases. Researchers and policymakers alike can delve into
          these repositories, extracting insights into the commitments and
          obligations of nations, the evolving dynamics of international
          cooperation, and the progress made towards collective environmental
          goals. By synthesizing and analyzing treaty-related data, stakeholders
          can gauge the effectiveness of global efforts and refine strategies
          for a more sustainable future.
        </p>
        <p className="mb-5">
          Complementing this legal framework, the labyrinthine corridors of EU
          legislation are similarly integrated into the broader environmental
          database landscape. The EU, driven by its commitment to ecological
          well-being, has established an intricate network of laws and
          regulations aimed at harmonizing environmental standards across its
          member states. These legislative acts are codified within digital
          repositories, enabling analysts to discern patterns, assess
          compliance, and pinpoint areas for potential refinement. This wealth
          of legislative data intertwines with other environmental datasets,
          enriching the overarching narrative of global sustainability.
        </p>
        <p className="mb-5">
          The sprawling archives of the UNEP furnish yet another facet of this
          data-driven paradigm. A treasure trove of information encompassing
          diverse ecological domains, UNEP s datasets provide an unparalleled
          glimpse into the state of the environment. From biodiversity indices
          to air quality measurements, these data points paint a comprehensive
          portrait of Earth s ecological health. Researchers adept at data
          mining can extrapolate trends, identify emerging challenges, and
          construct models that aid in forecasting future scenarios. The fusion
          of UNEP data with other interconnected sources creates a synergistic
          effect, enhancing the accuracy and scope of environmental insights.
        </p>
        <p className="mb-5">
          Central to international environmental diplomacy, UN negotiations
          stand as a cornerstone in the pursuit of global cooperation. Records
          of these intricate deliberations are meticulously documented and
          preserved within dedicated databases. The ebb and flow of dialogues,
          the emergence of consensus, and the resolution of disputes are all
          enshrined within these digital archives. By scrutinizing the
          trajectory of negotiations, analysts can unravel the intricate
          tapestry of international cooperation, deciphering the strategies and
          factors that drive progress in the environmental domain.
        </p>
        <p className="mb-5">
          In summation, the interplay of databases housing environmental
          treaties, EU legislation, UNEP data, and UN negotiations culminates in
          a multidimensional landscape of knowledge. This intricate tapestry
          empowers policymakers, researchers, and advocates to glean insights
          that steer the course of global environmental conservation. The
          amalgamation of these disparate datasets underpins a data-driven
          approach to addressing ecological challenges, shaping policies that
          resonate across borders, and fostering a harmonious relationship
          between humanity and the natural world.
        </p>
      </div>
    </div>
  );
};

export default Feature;
