const ADJECTIVES =['precarious', 'still', 'quiet', 'loud', 'striped', 'fearful', 'dotted', 'mended', 'crooked', 'small', 'young', 'nude', 'blue', 'easter', 'eccentric', 'new', 'red', 'pink', 'special', 'pacific', 'red', 'greedy', 'Champrovent', 'golden', 'triangular', 'white', 'pink', 'young', 'sleepy', 'nude', 'white', 'golden', 'pastoral', 'asleep'];
const ADVERBS = ['still'];
const ADVERBSRB = ['still'];
const NOUNS = ['portobello', 'king', 'patience', 'summertime', 'still life', 'victim', 'cardgames', 'ghosts', 'fear', 'barracks', 'years', 'Morvan', 'Chassy', 'moth', 'profile', 'children', 'girl', 'butterfly', 'feather', 'autumn', 'adventure', 'promise', 'star', 'leaves', 'houndstooth', 'blitz', 'plaits', 'raindbow', 'corner', 'surf', 'rose', 'paisley', 'spoon', 'flower', 'dandelion', 'road', 'farmyard', 'butterfly', 'feather', 'dance', 'links', 'autumn', 'swissroll', 'toadstool', '1930s', 'adventure', 'meadow', 'promises', 'lady', 'lido', 'paddle', 'butterfly', 'star', 'leaves', 'houndstooth', '1940s', 'blitz', 'party', 'day', 'feathers', 'land', 'plaits', 'night', 'rainbow', 'corner', 'surf', 'maze', 'cover', 'paisley', 'street', 'daughter', 'children', 'child', 'skirt', 'mountain', 'landscape', 'landscape', 'oxen', 'life', 'room', 'cat', 'landscape', 'window', 'room', 'passage', 'field', 'trees',  'nude', 'front', 'mantel', 'window', 'window', 'fruit', 'window', 'sill', 'dream', 'dream', 'fortune', 'fortune teller', 'toilette', 'bouquet', 'roses', 'window', 'moth', 'moth', 'dream', 'boy', 'pigeons', 'cow', 'tree branch', 'cup', 'coffee', 'room', 'sisters', 'sisters', 'sisters', 'sisters', 'card', 'game', 'table', 'profile', 'self', 'portrait', 'violin', 'lesson', 'lesson', 'violin', 'life', 'basket', 'oil', 'lamp', 'dream', 'chair', 'nude', 'knees', 'arms', 'side', 'view', 'drapery', 'cherry', 'tree', 'ladder', 'rose', 'rose', 'chair', 'daughter', 'window', 'guitar', 'lesson', 'cardgames', 'guitar', 'lessons', 'games', 'patience', 'cats', 'cherry', 'cat', 'mirror', 'mirror', 'composition', 'painter', 'model', 'silk', 'scarf', 'car', 'mirror', 'victim', 'skirt', 'cat', 'dream', 'room', 'patience', 'days', 'bed', 'week', 'mantel', 'patience', 'dream', 'fruit', 'bouquet', 'roses', 'moth', 'sisters', 'road', 'butterfly', 'feather', 'dance', 'autumn', 'swissroll', 'toadstool', 'adventure', 'meadow', 'promise', 'lady', 'lido', 'New York', 'paddle', 'butterfly', 'star', 'houndstooth', 'blitz', 'party', 'land', 'night', 'rainbow', 'corner', 'surf', 'maze', 'cover', 'paisley pattern', 'street', 'daughter', 'child', 'skirt', 'mountain', 'landscape', 'oxen', 'room', 'cat', 'landscape', 'window', 'room', 'passage', 'field', 'nude', 'front', 'mantel', 'window', 'girl', 'window', 'fruit', 'window', 'sill', 'dream', 'dream', 'fortune', 'teller', 'toilette', 'bouquet', 'window', 'moth', 'moth', 'dream', 'boy', 'cow', 'tree', 'cup', 'coffee', 'room', 'card', 'game', 'table', 'profile', 'self', 'portrait', 'violin', 'lessons', 'lesson', 'violin', 'life', 'basket', 'oil', 'lamp', 'dream', 'chair', 'stand', 'side', 'view', 'drapery', 'cherry', 'tree', 'cherry', 'cherry', 'ladder', 'chair', 'daughter', 'window', 'guitar', 'lesson', 'guitar', 'lesson', 'game', 'patience', 'cherry', 'cat', 'girl', 'composition', 'painter', 'model', 'silk', 'scarf', 'car', 'victim', 'skirt', 'cat', 'dream', 'drawing', 'room', 'patience', 'bed', 'week', 'mantel', 'patience', 'dream', 'fruit', 'bouquet', 'moth'];
const VERBS = ['run', 'float', 'make', 'profile', 'read', 'rest', 'get', 'taught', 'learnt', 'sleep', 'read', 'seated', 'rest', 'folded', 'stand', 'stand', 'dress', 'dream', 'sleep', 'sit', 'get'];
const VERBSVB = [];
const SPOTTED = ['spotted', 'noticed', 'thought I saw', 'was reminded of', 'was sitting beside']
const VERBSVBG = ['floating', 'reading', 'resting', 'sleeping', 'standing', 'dressing', 'dreaming', 'sleeping', 'sitting', 'getting up', 'sewing', 'looking away', 'watching', 'thinking', 'talking', 'humming', 'singing', 'falling', 'posing'];
const NAMES = ['Thérèse', 'André Derain', 'André', 'Katia', 'Joan', 'Joan Miró', 'Lady Abdy', 'Pierre',  'Matisse', 'Cathy', 'Lelia Caetani'];
const ADJECTIVESJJ = ['london', 'precarious', 'blue', 'easter', 'eccentric', 'new', 'red', 'pink', 'special', 'red', 'greedy', 'white', 'Larchant',
 'golden', 'triangular', 'white', 'sill', 'pink', 'red', 'young', 'sleepy', 'nude', 'white', 'golden', 'golden', 'sleepy'];
const VERBSPAST = ['laughed', 'asked', 'checked', 'kicked', 'looked', 'talked', 'walked','worked', 'crossed', 'dressed', 'guessed', 'missed', 'danced', 'brushed', 'crashed', 'pushed', 'rushed', 'reached', 'finished', 'fixed', 'relaxed', 'cheated', 'accepted', 'invented', 'departed', 'left', 'waited', 'avoided', 'decided', 'expanded', 'grew', 'pretended', 'succeeded', 'found it', 'appeared', 'considered', 'entered', 'remembered', 'arrived', 'observed', 'improved', 'buzzed', 'paused', 'turned', 'warned', 'carried', 'judged', 'questioned']