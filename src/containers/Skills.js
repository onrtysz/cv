import React from "react";
import { Grid } from "semantic-ui-react";
import SectionTitle from "../components/SectionTitle";
import { SkillRow } from "../components/SkillRow";
import useWindowSize from "../utils/useWindowSize";

function Skills() {
  const isNarrow = useWindowSize().width < 450;
  const titleColumnWidth = 3;
  const dataColumnWidth = 13;
  const className = "px12";
  return (
    <div>
      <SectionTitle title={"SKILLS"} />
      <Grid
        columns={2}
        style={{ marginTop: "10px", marginBottom: "10px" }}
        className={className}
        stackable={isNarrow}
      >
        <SkillRow
          titleColumnWidth={titleColumnWidth}
          dataColumnWidth={dataColumnWidth}
          title="front-end"
          items={[
            "React.js",
            "TypeScript",
            "MobX, Easy Peasy",
            "Material UI, Semantic UI, Tailwind CSS",
          ]}
          isNarrow={isNarrow}
        />
        <SkillRow
          titleColumnWidth={titleColumnWidth}
          dataColumnWidth={dataColumnWidth}
          title="back-end"
          items={[
            "NestJS",
            "Node.js",
            "TypeScript",
            "Python; Django",
            "MongoDB, MySQL",
            "Redis",
            "RESTful APIs",
            "Jaeger, New Relic",
            "Swagger",
          ]}
          isNarrow={isNarrow}
        />
        <SkillRow
          titleColumnWidth={titleColumnWidth}
          dataColumnWidth={dataColumnWidth}
          title="dev-ops"
          items={[
            "AWS; EC2, ECS, S3, Lambda, Step Functions, DynamoDB, CloudWatch, SNS, SQS, VPC, IAM",
            "Terraform, CDKTF",
            "Docker",
            "Heroku",
          ]}
          isNarrow={isNarrow}
        />
        <SkillRow
          titleColumnWidth={titleColumnWidth}
          dataColumnWidth={dataColumnWidth}
          title="others"
          items={[ "Git"]}
          isNarrow={isNarrow}
        />
        <SkillRow
          titleColumnWidth={titleColumnWidth}
          dataColumnWidth={dataColumnWidth}
          title="data science"
          items={["Python; NumPy, Pandas", "MATLAB"]}
          isNarrow={isNarrow}
        />
      </Grid>
    </div>
  );
}

export default Skills;
