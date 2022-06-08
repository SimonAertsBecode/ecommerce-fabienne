import React from 'react';

const Loading = ({ loading, text, children }: { loading: boolean; text: string; children: React.ReactNode }) => {
   return <>{loading ? text : children}</>;
};

export default Loading;
