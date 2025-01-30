// src/pages/Messages.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Star, Trash2, Archive } from "lucide-react";
import { useTheme } from "@mui/material/styles";

export const Messages = () => {
  const theme = useTheme();

  const messages = [
    {
      id: 1,
      from: "John Doe",
      subject: "Project Update - Q4 Goals",
      preview: "Hi team, I wanted to share the latest updates on our Q4 goals...",
      time: "10:30 AM",
      isStarred: true,
      isRead: false,
    },
    {
      id: 2,
      from: "Jane Smith",
      subject: "Meeting Tomorrow - Client Presentation",
      preview: "The client presentation is scheduled for tomorrow at 2 PM...",
      time: "09:15 AM",
      isStarred: false,
      isRead: true,
    },
    {
      id: 3,
      from: "Bob Johnson",
      subject: "Quick Question about the API",
      preview: "I was looking at the API documentation and had a question about...",
      time: "Yesterday",
      isStarred: false,
      isRead: true,
    },
    {
      id: 4,
      from: "Alice Brown",
      subject: "New Feature Proposal",
      preview: "I have a proposal for a new feature that could improve user engagement...",
      time: "2 days ago",
      isStarred: true,
      isRead: false,
    },
    {
      id: 5,
      from: "Charlie Davis",
      subject: "Bug Report",
      preview: "I encountered a bug in the latest release. Here are the details...",
      time: "3 days ago",
      isStarred: false,
      isRead: true,
    },
    {
      id: 6,
      from: "Eve Wilson",
      subject: "Feedback on Design",
      preview: "I have some feedback on the new design. Can we discuss it?",
      time: "4 days ago",
      isStarred: false,
      isRead: true,
    },
    {
      id: 7,
      from: "Frank Miller",
      subject: "Upcoming Deadline",
      preview: "Just a reminder about the upcoming deadline for the project...",
      time: "5 days ago",
      isStarred: true,
      isRead: false,
    },
    {
      id: 8,
      from: "Grace Lee",
      subject: "Team Meeting Agenda",
      preview: "Here’s the agenda for our next team meeting. Please review...",
      time: "6 days ago",
      isStarred: false,
      isRead: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mt-8"> {/* Added margin-top here */}
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: theme.palette.text.primary }}>
          Messages
        </h1>
        <div className="flex gap-2">
          <button
            className="p-2 hover:bg-secondary rounded-md"
            style={{ backgroundColor: theme.palette.background.default }}
          >
            <Archive className="w-5 h-5" style={{ color: theme.palette.text.primary }} />
          </button>
          <button
            className="p-2 hover:bg-secondary rounded-md"
            style={{ backgroundColor: theme.palette.background.default }}
          >
            <Trash2 className="w-5 h-5" style={{ color: theme.palette.text.primary }} />
          </button>
        </div>
      </div>

      <Card style={{ backgroundColor: theme.palette.background.paper }}>
        <CardContent className="p-0 divide-y divide-border">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors cursor-pointer"
              style={{ backgroundColor: theme.palette.background.paper }}
            >
              <div className="flex items-center gap-4 flex-1">
                <button className="text-muted-foreground hover:text-primary">
                  <Star
                    className={`w-5 h-5 ${
                      message.isStarred ? "fill-yellow-400 stroke-yellow-400" : ""
                    }`}
                    style={{ color: theme.palette.text.secondary }}
                  />
                </button>
                <Mail className="w-5 h-5" style={{ color: theme.palette.text.secondary }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p
                      className={`font-medium ${
                        !message.isRead ? "text-primary" : ""
                      }`}
                      style={{ color: !message.isRead ? theme.palette.primary.main : theme.palette.text.primary }}
                    >
                      {message.from}
                    </p>
                    <span
                      className="text-sm text-muted-foreground"
                      style={{ color: theme.palette.text.secondary }}
                    >
                      {message.time}
                    </span>
                  </div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: theme.palette.text.primary }}
                  >
                    {message.subject}
                  </p>
                  <p
                    className="text-sm text-muted-foreground truncate"
                    style={{ color: theme.palette.text.secondary }}
                  >
                    {message.preview}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
