import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, User, Lock, Palette, Shield, Globe, Save, Upload } from "lucide-react";
import { useTheme } from "@mui/material/styles";

export const Settings = () => {
  const theme = useTheme();
  const [avatar, setAvatar] = useState<File | null>(null);

  const cardStyle = {
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.divider,
  };

  const inputStyle = {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderColor: theme.palette.divider,
  };

  const buttonStyle = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  };

  const sections = [
    {
      id: 'profile',
      title: 'Profile Settings',
      icon: User,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {avatar ? (
                <img src={URL.createObjectURL(avatar)} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <User className="w-8 h-8" style={{ color: theme.palette.text.secondary }} />
              )}
            </div>
            <div>
              <input
                type="file"
                id="avatar"
                className="hidden"
                onChange={(e) => setAvatar(e.target.files?.[0] || null)}
                accept="image/*"
              />
              <label
                htmlFor="avatar"
                className="flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer"
                style={buttonStyle}
              >
                <Upload className="w-4 h-4" />
                Upload Photo
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" style={{ color: theme.palette.text.primary }}>
              Display Name
            </label>
            <input
              type="text"
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              placeholder="Your name"
              style={inputStyle}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" style={{ color: theme.palette.text.primary }}>
              Email
            </label>
            <input
              type="email"
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              placeholder="your@email.com"
              style={inputStyle}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" style={{ color: theme.palette.text.primary }}>
              Bio
            </label>
            <textarea
              className="flex w-full rounded-md border px-3 py-2 text-sm min-h-[100px]"
              placeholder="Tell us about yourself"
              style={inputStyle}
            />
          </div>
        </div>
      ),
    },
    {
      id: 'notifications',
      title: 'Notification Settings',
      icon: Bell,
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" style={{ color: theme.palette.text.primary }}>
              Email Notifications
            </label>
            <div className="space-y-2">
              {['Updates & News', 'Account Activity', 'New Messages', 'Marketing'].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    style={{ accentColor: theme.palette.primary.main }}
                  />
                  <span style={{ color: theme.palette.text.primary }}>{item}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" style={{ color: theme.palette.text.primary }}>
              Push Notifications
            </label>
            <select
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              style={inputStyle}
            >
              <option value="all">All Notifications</option>
              <option value="mentions">Mentions Only</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
      ),
    },
    {
      id: 'security',
      title: 'Security Settings',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" style={{ color: theme.palette.text.primary }}>
              Change Password
            </label>
            <input
              type="password"
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              placeholder="Current Password"
              style={inputStyle}
            />
            <input
              type="password"
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              placeholder="New Password"
              style={inputStyle}
            />
            <input
              type="password"
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              placeholder="Confirm New Password"
              style={inputStyle}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" style={{ color: theme.palette.text.primary }}>
              Two-Factor Authentication
            </label>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300"
                style={{ accentColor: theme.palette.primary.main }}
              />
              <span style={{ color: theme.palette.text.primary }}>Enable Two-Factor Authentication</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'appearance',
      title: 'Appearance Settings',
      icon: Palette,
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" style={{ color: theme.palette.text.primary }}>
              Theme
            </label>
            <select
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              style={inputStyle}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System Default</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" style={{ color: theme.palette.text.primary }}>
              Accent Color
            </label>
            <input
              type="color"
              className="w-10 h-10 rounded-md border"
              style={{ backgroundColor: theme.palette.primary.main }}
            />
          </div>
        </div>
      ),
    },
    {
      id: 'privacy',
      title: 'Privacy Settings',
      icon: Lock,
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" style={{ color: theme.palette.text.primary }}>
              Data Sharing
            </label>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300"
                style={{ accentColor: theme.palette.primary.main }}
              />
              <span style={{ color: theme.palette.text.primary }}>Allow data sharing with third parties</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" style={{ color: theme.palette.text.primary }}>
              Location Access
            </label>
            <select
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              style={inputStyle}
            >
              <option value="always">Always</option>
              <option value="never">Never</option>
              <option value="ask">Ask Every Time</option>
            </select>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {sections.map((section) => (
        <Card key={section.id} style={cardStyle}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <section.icon className="w-5 h-5" style={{ color: theme.palette.text.primary }} />
              <span style={{ color: theme.palette.text.primary }}>{section.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>{section.content}</CardContent>
        </Card>
      ))}
      <div className="flex justify-end">
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-md"
          style={buttonStyle}
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>
    </div>
  );
};
