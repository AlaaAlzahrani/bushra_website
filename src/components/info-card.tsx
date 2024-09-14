import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  List,
  ListItem,
  IconButton 
} from "@material-tailwind/react";

interface BaseInfoCardProps {
  title: string;
  date: string;
  children: React.ReactNode;
}

interface IconInfoCardProps extends BaseInfoCardProps {
  icon: React.ElementType;
}

interface ImageInfoCardProps extends BaseInfoCardProps {
  imageSrc: string;
  imageAlt: string;
}

const renderContent = (children: React.ReactNode) => {
  if (typeof children === "string") {
    return children.split("\n").map((item, index) => (
      <ListItem key={index} className="p-0">
        <Typography className="font-normal !text-gray-500">
          {item.trim()}
        </Typography>
      </ListItem>
    ));
  }
  return children;
};

export function IconInfoCard({ icon: Icon, title, date, children }: IconInfoCardProps) {
  return (
    <Card>
      <CardHeader
        className="flex items-center justify-between rounded-none overflow-visible"
        floated={false}
        shadow={false}
      >
        <div className="flex flex-col gap-1 w-full">
          <Typography color="blue" className="font-bold text-xs">
            {date}
          </Typography>
          <Typography color="blue-gray" variant="h5" className="w-full">
            {title}
          </Typography>
        </div>
        <IconButton
          className="flex-shrink-0 pointer-events-none"
          ripple={false}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </IconButton>
      </CardHeader>
      <CardBody className="grid justify-start !px-3.5 pt-2">
        <Typography className=" font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export function ImageInfoCard({ imageSrc, imageAlt, title, date, children }: ImageInfoCardProps) {
  return (
    <Card>
      <CardHeader
        className="flex items-center justify-between rounded-none overflow-visible h-28"
        floated={false}
        shadow={false}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-1">
            <Typography color="blue" className="font-bold text-xs">
              {date}
            </Typography>
            <Typography color="blue-gray" variant="h5" className="w-full">
              {title}
            </Typography>
          </div>
          <div className="relative w-20 h-20">
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              quality={100}
              priority
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="grid justify-start !px-3.5 pt-2">
        <List className="p-0">
          {renderContent(children)}
        </List>
      </CardBody>
    </Card>
  );
}