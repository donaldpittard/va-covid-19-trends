import React from "react";

interface LoadableProps {
  predicate: (...params: any) => boolean;
  children: object;
}

export default function Loadable({ predicate, children }: LoadableProps) {
  return !predicate() ? <>{children}</> : <p>Loading...</p>;
}
