
import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';

export const PostList = () => (
    <List {...props}  filters={<PostFilter/>} perPage={25}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="slug" />
            <TextField source="url" />
            <TextField source="submitterAvatarUrl" />
            <BooleanField source="productImageUrl" />
        </Datagrid>
    </List>
);

const PostFilter = (props) => (
    <Filter {...props}>
    <TextInput label="id" source="id"/>
    <TextInput label="name" source="name" />
    <TextInput label="slug" source="slug" />
    <TextInput label="url" source="url" />
    <TextInput label="Search" source="q" alwaysOn />
    </Filter>
)