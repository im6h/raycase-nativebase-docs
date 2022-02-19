import { ActionPanel, Icon, List, Action } from "@raycast/api";
import items from "./items.json";

export default function Command() {
  return (
    <List isLoading={false} searchBarPlaceholder="Filter by component name...">
      {items.map((item, idx) => (
        <List.Item
          key={idx}
          icon={{ source: Icon.Link }}
          title={item.title}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={item.url} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
