"use client";

import { Card, Typography, Descriptions, Divider } from "antd";

const { Title, Paragraph } = Typography;

type HierarchyContent = {
  id: string;
  title: string;
  description: string;
  details: Array<{ key: string; value: string }>;
  summary: string;
};

type HierarchyContentProps = {
  content: HierarchyContent | null;
};

export default function HierarchyContent({ content }: HierarchyContentProps) {
  if (!content) {
    return (
      <Card className="h-64 flex items-center justify-center">
        <Typography.Text type="secondary">
          Select a node from the hierarchy tree to view details
        </Typography.Text>
      </Card>
    );
  }

  return (
    <Card>
      <Title level={4}>{content.title}</Title>
      <Paragraph>{content.description}</Paragraph>

      <Divider />

      <Descriptions title="Details" bordered column={2}>
        {content.details.map((detail) => (
          <Descriptions.Item key={detail.key} label={detail.key}>
            {detail.value}
          </Descriptions.Item>
        ))}
      </Descriptions>

      <Divider />

      <Title level={5}>Summary</Title>
      <Paragraph>{content.summary}</Paragraph>
    </Card>
  );
}
