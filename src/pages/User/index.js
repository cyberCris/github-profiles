import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Starred,
  Repo,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default function User({ route, navigation }) {
  const { user } = route.params;
  const [starred, setStarred] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: user.name });

    async function getStarred() {
      const response = await api.get(`/users/${user.login}/starred`);

      setStarred(response.data);
    }

    getStarred();
  }, []);

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>

      <Starred
        data={starred}
        keyExtractor={(repo) => String(repo.id)}
        renderItem={({ item }) => (
          <Repo>
            <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
            <Info>
              <Title>{item.name}</Title>
              <Author>{item.owner.login}</Author>
            </Info>
          </Repo>
        )}
      ></Starred>
    </Container>
  );
}
