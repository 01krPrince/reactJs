import {
    ImageField,
    List,
    NumberField,
    ReferenceField,
    TextField,
    useRecordContext,
    EditButton,
    TopToolbar,
    SelectColumnsButton,
    ExportButton,
    DatagridConfigurable,
  } from 'react-admin';
  
import { PosterFilterSidebar } from './FilterList';

const PosterListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    <ExportButton />
  </TopToolbar>
)

  const UrlField = ({ source }: { source: string }) => {
    const record = useRecordContext();
    if (!record) return null;
  
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.stopPropagation();
    };
  
    return (
      <a href={record[source]} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        View
      </a>
    );
  };
  
  export const PosterList = () => (
    <List aside={<PosterFilterSidebar />} actions={<PosterListActions />}>
      <DatagridConfigurable>
        <TextField source="id" />
        <ReferenceField source="category_id" reference="categories" />
        <TextField source="title" />
        <NumberField source="width" label="Width(cm)" />
        <NumberField source="height" label="Height(cm)" />
        <NumberField source="price" />
        <ImageField
          source="thumbnail"
          title="title"
          sx={{
            "& img": { maxWidth: 80, maxHeight: 80, objectFit: "contain" }
          }}
        />
        <UrlField source="image" />
        <TextField source="description" />
        <NumberField source="stock" />
        <NumberField source="sales" sx={{ fontWeight: "bold" }} />
        <EditButton />
      </DatagridConfigurable>
    </List>
  );
  