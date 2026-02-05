import React from "react";
import { List } from "semantic-ui-react";

class SectionItem extends React.Component {
  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
        className="noPageBreak"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div className={"px16"} style={{ marginRight: "10px" }}>
            <strong>{this.props.companyTitle}</strong>
          </div>
          <div className={"px12"}>
            {this.props.location}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div className={"px14"} style={{ marginRight: "10px" }}>
            <em>{this.props.jobTitle}</em>
          </div>
          <div className={"px12"}>
            {this.props.startDate ? [this.props.startDate, " – "] : null}
            {this.props.endDate || "Present"}
          </div>
        </div>
        {this.props.description && (
          <div className={"px12"}>{this.props.description}</div>
        )}
        {this.props.roleGroups ? (
          <div style={{ marginTop: "10px" }}>
            {this.props.roleGroups.map((roleGroup, rgIdx) => (
              <div key={rgIdx} style={{ marginBottom: "8px" }}>
                <div className={"px12"} style={{ fontWeight: "600", fontStyle: "italic", marginBottom: "4px", paddingLeft: "1em" }}>
                  {roleGroup.roleTitle}
                </div>
                <List
                  bulleted
                  style={{
                    paddingLeft: "2em",
                    marginTop: "4px",
                    marginBottom: "0px",
                  }}
                >
                  {roleGroup.items.map((item, ix) => (
                    <List.Item key={ix} className={"px12"}>
                      {item}
                    </List.Item>
                  ))}
                </List>
              </div>
            ))}
          </div>
        ) : this.props.items ? (
          <List
            bulleted
            style={{
              paddingLeft: "2em",
              marginTop: "10px",
              marginBottom: "0px",
            }}
          >
            {this.props.items.map((item, ix) => {
              return (
                <List.Item key={ix} className={"px12"}>
                  {item}
                </List.Item>
              );
            })}
          </List>
        ) : null}
        {this.props.relevantItems ? (
          <div style={{ marginTop: "5px" }}>
            <div
              className={"px10"}
              style={{
                paddingLeft: "6em",
                flexGrow: 1,
                flexBasis: 0,
              }}
            >
              
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {this.props.relevantItems.map((item, ix) => {
                  return (
                    <div
                      key={ix}
                      style={{
                        flex: "1 0 50%",
                      }}
                    >
                      {"•"}&nbsp;&nbsp;
                      {item}
                      {ix + 1 < this.props.items.length ? (
                        <span>&nbsp;&nbsp;</span>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SectionItem;
