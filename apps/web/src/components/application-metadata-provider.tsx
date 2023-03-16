import { ApplicationMetadata } from '@/services/cms/get-application-metadata';
import { createContext, useContext } from 'react';

interface ApplicationMetadataValue {
  data?: ApplicationMetadata['attributes'];
}

export const ApplicationMetadataContext = createContext<ApplicationMetadataValue>({
  data: undefined,
});

export const useApplicationMetadata = () => useContext(ApplicationMetadataContext).data;
