import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Button, Text, SafeAreaView } from 'react-native';
import PostCard from './PostCard';

const ALL_POSTS = [
  { id: '1', author: 'John Doe', role: 'Software Engineer', content: 'Excited to start my new journey at TechCorp! It has been an amazing few years learning and growing with the best team in the industry. Looking forward to what comes next in 2026.', image: 'https://picsum.photos' },
  { id: '2', author: 'Jane Smith', role: 'UI Designer', content: 'Just finished a new case study on minimalist design systems. Consistency is key to user satisfaction.', image: 'https://picsum.photos' },
  { id: '3', author: 'Alex Lee', role: 'Recruiter', content: 'We are hiring! Reach out if you are interested in React Native roles.', image: null },
  { id: '4', author: 'Product Hub', role: 'Company', content: 'Innovation distinguishes between a leader and a follower. Our 2026 roadmap is looking brighter than ever.', image: 'https://picsum.photos' },
  { id: '5', author: 'Sarah Con', role: 'Data Scientist', content: 'AI trends in 2026 are shifting towards localized edge computing.', image: null },
  { id: '6', author: 'Tech Weekly', role: 'Newsletter', content: 'Top 10 frameworks to watch this year.', image: 'https://picsum.photos' },
  { id: '7', author: 'Mike Ross', role: 'Lawyer', content: 'Legal tech is evolving fast. Stay updated on the latest compliance rules.', image: 'https://picsum.photos' },
  { id: '8', author: 'Emma Watson', role: 'Manager', content: 'Leadership is about empathy and clear communication.', image: null },
  { id: '9', author: 'Dev Community', role: 'Group', content: 'What is your favorite VS Code extension for 2026?', image: 'https://picsum.photos' },
  { id: '10', author: 'Chris Evans', role: 'Architect', content: 'Building sustainable cities requires long-term thinking.', image: null },
];

export default function LinkedInFeed() {
  // Start by showing only 3 posts
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ALL_POSTS.slice(0, visibleCount)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard 
            author={item.author} 
            role={item.role} 
            content={item.content} 
            image={item.image} 
          />
        )}
        ListFooterComponent={() => (
          visibleCount < ALL_POSTS.length ? (
            <TouchableOpacity style={styles.viewMoreBtn} onPress={loadMore}>
              <Text style={styles.viewMoreText}>View More Posts</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.endText}>You're all caught up!</Text>
          )
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f2ef' },
  viewMoreBtn: { padding: 15, backgroundColor: '#fff', alignItems: 'center', marginVertical: 10 },
  viewMoreText: { color: '#0a66c2', fontWeight: 'bold' },
  endText: { textAlign: 'center', padding: 20, color: '#666' }
});
