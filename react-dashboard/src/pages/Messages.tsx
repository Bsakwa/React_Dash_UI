import { Card, CardContent } from "@/components/ui/card";
import { Mail, Star, Trash2, Archive } from "lucide-react";
import { useTheme, alpha } from "@mui/material/styles";

interface Message {
  id: number;
  from: string;
  subject: string;
  preview: string;
  time: string;
  isStarred: boolean;
  isRead: boolean;
}

export const Messages = () => {
  const theme = useTheme();

  const messages: Message[] = [
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
      preview: "Here's the agenda for our next team meeting. Please review...",
      time: "6 days ago",
      isStarred: false,
      isRead: true,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 
          className="text-3xl font-bold tracking-tight"
          style={{ color: theme.palette.text.primary }}
        >
          Messages
        </h1>
        <div className="flex gap-2">
          <button
            className="p-2 rounded-lg transition-colors duration-200"
            style={{ 
              backgroundColor: alpha(theme.palette.background.default, 0.6),
              '&:hover': {
                backgroundColor: alpha(theme.palette.background.default, 0.8),
              }
            }}
          >
            <Archive 
              className="w-5 h-5" 
              style={{ color: theme.palette.text.secondary }}
            />
          </button>
          <button
            className="p-2 rounded-lg transition-colors duration-200"
            style={{ 
              backgroundColor: alpha(theme.palette.background.default, 0.6),
              '&:hover': {
                backgroundColor: alpha(theme.palette.background.default, 0.8),
              }
            }}
          >
            <Trash2 
              className="w-5 h-5" 
              style={{ color: theme.palette.text.secondary }}
            />
          </button>
        </div>
      </div>

      <Card
        className="overflow-hidden"
        style={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[1],
          borderRadius: theme.shape.borderRadius,
          borderColor: theme.palette.divider, // Added border color
          borderWidth: 1, // Added border width
        }}
      >
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className="group transition-colors duration-200"
                style={{ 
                  backgroundColor: message.isRead 
                    ? theme.palette.background.paper
                    : alpha(theme.palette.primary.main, 0.04),
                  borderBottom: index === messages.length - 1 
                    ? 'none' 
                    : `1px solid ${theme.palette.divider}`,
                }}
              >
                <div className="flex items-center gap-4 p-4 hover:bg-black/5">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <button 
                      className="transition-transform hover:scale-110 focus:outline-none"
                      aria-label={message.isStarred ? "Unstar message" : "Star message"}
                    >
                      <Star
                        className={`w-5 h-5 transition-colors ${
                          message.isStarred ? "fill-yellow-400 stroke-yellow-400" : ""
                        }`}
                        style={{ 
                          color: message.isStarred 
                            ? "#FCD34D"
                            : theme.palette.text.secondary 
                        }}
                      />
                    </button>
                    
                    <Mail 
                      className="w-5 h-5 flex-shrink-0" 
                      style={{ color: theme.palette.text.secondary }}
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p
                          className="font-medium truncate"
                          style={{ 
                            color: !message.isRead 
                              ? theme.palette.primary.main
                              : theme.palette.text.primary 
                          }}
                        >
                          {message.from}
                        </p>
                        <span
                          className="text-sm flex-shrink-0"
                          style={{ color: theme.palette.text.secondary }}
                        >
                          {message.time}
                        </span>
                      </div>
                      
                      <p
                        className="text-sm font-medium truncate mt-0.5"
                        style={{ color: theme.palette.text.primary }}
                      >
                        {message.subject}
                      </p>
                      
                      <p
                        className="text-sm truncate mt-0.5"
                        style={{ color: theme.palette.text.secondary }}
                      >
                        {message.preview}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Messages;
