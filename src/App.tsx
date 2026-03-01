import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  RotateCcw, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  BarChart3, 
  LayoutDashboard,
  GraduationCap,
  Timer,
  AlertCircle,
  Menu,
  Zap,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Question, Subject, QuizResult, Subject as SubjectType } from './types';
import { QUESTIONS, SUBJECTS, TOPICS_BY_SUBJECT } from './constants';

type AppMode = 'home' | 'quiz' | 'result' | 'history';
type QuizType = 'mock' | 'mega' | 'subject' | 'topic';

export default function App() {
  const [mode, setMode] = useState<AppMode>('home');
  const [quizType, setQuizType] = useState<QuizType>('mock');
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<Question['level'] | 'Tất cả'>('Tất cả');
  
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [history, setHistory] = useState<QuizResult[]>([]);

  // Load history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('khtn_quiz_history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (mode === 'quiz' && !isSubmitted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [mode, isSubmitted, timeLeft]);

  const startQuiz = (type: QuizType, subject?: SubjectType, topic?: string) => {
    let filtered: Question[] = [];
    let duration = 0;

    const filterByLevel = (qs: Question[]) => {
      if (selectedLevel === 'Tất cả') return qs;
      return qs.filter(q => q.level === selectedLevel);
    };

    if (type === 'mock') {
      // Standard 40 questions mock exam
      const physics = QUESTIONS.filter(q => q.subject === 'Vật lí').sort(() => Math.random() - 0.5).slice(0, 14);
      const chemistry = QUESTIONS.filter(q => q.subject === 'Hóa học').sort(() => Math.random() - 0.5).slice(0, 14);
      const biology = QUESTIONS.filter(q => q.subject === 'Sinh học').sort(() => Math.random() - 0.5).slice(0, 12);
      
      filtered = [...physics, ...chemistry, ...biology].sort(() => Math.random() - 0.5);
      duration = 50 * 60; // 50 minutes
    } else if (type === 'mega') {
      // Mega 120 questions mock exam
      const physics = QUESTIONS.filter(q => q.subject === 'Vật lí').sort(() => Math.random() - 0.5).slice(0, 42);
      const chemistry = QUESTIONS.filter(q => q.subject === 'Hóa học').sort(() => Math.random() - 0.5).slice(0, 42);
      const biology = QUESTIONS.filter(q => q.subject === 'Sinh học').sort(() => Math.random() - 0.5).slice(0, 36);
      
      filtered = [...physics, ...chemistry, ...biology].sort(() => Math.random() - 0.5);
      duration = 150 * 60; // 150 minutes
    } else if (type === 'subject' && subject) {
      const subjectQuestions = QUESTIONS.filter(q => q.subject === subject);
      filtered = filterByLevel(subjectQuestions).sort(() => Math.random() - 0.5).slice(0, 20);
      duration = filtered.length * 90; // 90 seconds per question
    } else if (type === 'topic' && topic) {
      const topicQuestions = QUESTIONS.filter(q => q.topic === topic);
      filtered = filterByLevel(topicQuestions).sort(() => Math.random() - 0.5).slice(0, 20);
      duration = filtered.length * 90;
    }

    if (filtered.length === 0) {
      alert('Hiện chưa có câu hỏi cho phần này. Vui lòng chọn phần khác!');
      return;
    }

    setCurrentQuestions(filtered);
    setUserAnswers(new Array(filtered.length).fill(null));
    setCurrentIndex(0);
    setIsSubmitted(false);
    setTimeLeft(duration);
    setStartTime(Date.now());
    setQuizType(type);
    setMode('quiz');
  };

  const handleAnswer = (optionIndex: number) => {
    if (isSubmitted) return;
    const newAnswers = [...userAnswers];
    newAnswers[currentIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (isSubmitted) return;
    setIsSubmitted(true);
    
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const score = userAnswers.reduce((acc, ans, idx) => {
      return ans === currentQuestions[idx].correctAnswer ? acc + 1 : acc;
    }, 0);

    const subjectStats: any = {
      'Vật lí': { correct: 0, total: 0 },
      'Hóa học': { correct: 0, total: 0 },
      'Sinh học': { correct: 0, total: 0 }
    };

    currentQuestions.forEach((q, idx) => {
      subjectStats[q.subject].total++;
      if (userAnswers[idx] === q.correctAnswer) {
        subjectStats[q.subject].correct++;
      }
    });

    const result: QuizResult = {
      id: Date.now().toString(),
      date: new Date().toLocaleString('vi-VN'),
      score,
      totalQuestions: currentQuestions.length,
      timeTaken,
      subjectStats
    };

    const newHistory = [result, ...history].slice(0, 10);
    setHistory(newHistory);
    localStorage.setItem('khtn_quiz_history', JSON.stringify(newHistory));
    setMode('result');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const renderHome = () => (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      <div className="text-center space-y-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-block p-3 bg-blue-100 rounded-2xl mb-2"
        >
          <GraduationCap className="w-12 h-12 text-blue-600" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Ôn Thi Lớp 10 KHTN 9</h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Hệ thống ôn luyện bám sát cấu trúc đề thi tuyển sinh lớp 10 THPT với đầy đủ 3 phân môn Vật lí, Hóa học và Sinh học.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mock Exam Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl cursor-pointer relative overflow-hidden group"
          onClick={() => startQuiz('mock')}
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Trophy size={120} />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Thi Thử Tổng Hợp</h2>
              <p className="text-blue-100 mt-1">40 câu hỏi - 50 phút - Cấu trúc chuẩn</p>
            </div>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors">
              Bắt đầu ngay <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Mega Mock Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-indigo-600 rounded-3xl p-8 text-white shadow-xl cursor-pointer relative overflow-hidden group"
          onClick={() => startQuiz('mega')}
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Zap size={120} />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Mega Mock Exam</h2>
              <p className="text-indigo-100 mt-1">120 câu hỏi - 150 phút - Toàn diện</p>
            </div>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-indigo-50 transition-colors">
              Thử thách <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* History/Stats Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg cursor-pointer flex flex-col justify-between"
          onClick={() => setMode('history')}
        >
          <div className="space-y-4">
            <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Lịch Sử & Thống Kê</h2>
              <p className="text-gray-500 mt-1">Xem lại kết quả và tiến độ học tập của bạn</p>
            </div>
          </div>
          <div className="mt-6 flex items-center text-blue-600 font-semibold gap-2">
            Xem chi tiết <ChevronRight size={18} />
          </div>
        </motion.div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <BookOpen className="text-blue-600" size={24} />
          Luyện Tập Theo Phân Môn
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SUBJECTS.map((subject) => (
            <motion.button
              key={subject}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedSubject(subject);
                setMode('topic_select');
              }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-left space-y-3"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                subject === 'Vật lí' ? 'bg-purple-100 text-purple-600' :
                subject === 'Hóa học' ? 'bg-emerald-100 text-emerald-600' :
                'bg-rose-100 text-rose-600'
              }`}>
                {subject === 'Vật lí' ? <Timer size={20} /> : 
                 subject === 'Hóa học' ? <AlertCircle size={20} /> : 
                 <LayoutDashboard size={20} />}
              </div>
              <span className="block font-bold text-gray-800">{subject}</span>
              <span className="text-xs text-gray-500">
                {QUESTIONS.filter(q => q.subject === subject).length} câu hỏi có sẵn
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTopicSelect = () => {
    if (!selectedSubject) return null;
    const topics = TOPICS_BY_SUBJECT[selectedSubject];
    const levels: (Question['level'] | 'Tất cả')[] = ['Tất cả', 'Nhận biết', 'Thông hiểu', 'Vận dụng'];

    return (
      <div className="max-w-4xl mx-auto space-y-8 p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                setMode('home');
                setSelectedLevel('Tất cả');
              }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold text-gray-900">Chọn chủ đề: {selectedSubject}</h2>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl self-start">
            {levels.map((l) => (
              <button
                key={l}
                onClick={() => setSelectedLevel(l)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  selectedLevel === l 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => startQuiz('subject', selectedSubject)}
            className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg flex items-center justify-between group"
          >
            <div className="text-left">
              <h3 className="text-xl font-bold">Tất cả {selectedSubject}</h3>
              <p className="text-blue-100 text-sm">
                {QUESTIONS.filter(q => q.subject === selectedSubject && (selectedLevel === 'Tất cả' || q.level === selectedLevel)).length} câu hỏi phù hợp
              </p>
            </div>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {topics.map((topic) => (
            <motion.button
              key={topic}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => startQuiz('topic', selectedSubject, topic)}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-left flex items-center justify-between group"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800">{topic}</h3>
                <p className="text-xs text-gray-500">
                  {QUESTIONS.filter(q => q.topic === topic && (selectedLevel === 'Tất cả' || q.level === selectedLevel)).length} câu hỏi phù hợp
                </p>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          ))}
        </div>
      </div>
    );
  };

  const renderQuiz = () => {
    const question = currentQuestions[currentIndex];
    const progress = ((currentIndex + 1) / currentQuestions.length) * 100;

    return (
      <div className="max-w-3xl mx-auto p-4 space-y-6">
        {/* Quiz Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm sticky top-0 z-20 border border-gray-100">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                if (confirm('Bạn có chắc muốn thoát bài thi? Kết quả sẽ không được lưu.')) {
                  setMode('home');
                }
              }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            <div>
              <h2 className="font-bold text-gray-900">
                {quizType === 'mock' ? 'Thi Thử Tổng Hợp' : question.subject}
              </h2>
              <p className="text-xs text-gray-500">Câu {currentIndex + 1} / {currentQuestions.length}</p>
            </div>
          </div>
          <motion.div 
            animate={timeLeft < 60 ? { scale: [1, 1.05, 1] } : {}}
            transition={{ repeat: Infinity, duration: 1 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono font-bold ${
            timeLeft < 60 ? 'bg-red-100 text-red-600' : 'bg-blue-50 text-blue-600'
          }`}>
            <Clock size={18} />
            {formatTime(timeLeft)}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-blue-600"
          />
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                  {question.level}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                  {question.topic}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
                {question.content}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {question.options.map((option, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.01, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(idx)}
                  className={`p-5 rounded-2xl text-left transition-all border-2 flex items-center justify-between group ${
                    userAnswers[currentIndex] === idx
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-gray-100 hover:border-blue-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <motion.span 
                      animate={userAnswers[currentIndex] === idx ? { scale: [1, 1.2, 1] } : {}}
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      userAnswers[currentIndex] === idx
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </motion.span>
                    <span className="font-medium">{option}</span>
                  </div>
                  <AnimatePresence>
                    {userAnswers[currentIndex] === idx && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                      >
                        <CheckCircle2 size={20} className="text-blue-600" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4">
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex(prev => prev - 1)}
            className="px-6 py-3 rounded-2xl font-bold text-gray-600 hover:bg-gray-100 disabled:opacity-30 transition-all"
          >
            Quay lại
          </motion.button>
          
          {currentIndex === currentQuestions.length - 1 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
            >
              Nộp bài
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentIndex(prev => prev + 1)}
              className="px-8 py-3 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all flex items-center gap-2"
            >
              Tiếp theo <ChevronRight size={18} />
            </motion.button>
          )}
        </div>

        {/* Question Navigator Grid */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Danh sách câu hỏi</h4>
          <div className="grid grid-cols-8 sm:grid-cols-10 gap-2">
            {currentQuestions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-full aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                  currentIndex === idx ? 'ring-2 ring-blue-600 ring-offset-2' : ''
                } ${
                  userAnswers[idx] !== null ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderResult = () => {
    const lastResult = history[0];
    if (!lastResult) return null;

    const percentage = Math.round((lastResult.score / lastResult.totalQuestions) * 100);
    
    return (
      <div className="max-w-3xl mx-auto p-4 space-y-8">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 text-center space-y-6"
        >
          <div className="relative inline-block">
            <svg className="w-48 h-48 transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-gray-100"
              />
              <motion.circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={552.92}
                initial={{ strokeDashoffset: 552.92 }}
                animate={{ strokeDashoffset: 552.92 - (552.92 * percentage) / 100 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-blue-600"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black text-gray-900">{lastResult.score}/{lastResult.totalQuestions}</span>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Câu đúng</span>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">
              {percentage >= 80 ? 'Xuất sắc!' : percentage >= 50 ? 'Khá tốt!' : 'Cần cố gắng thêm!'}
            </h2>
            <p className="text-gray-500">Bạn đã hoàn thành bài thi trong {formatTime(lastResult.timeTaken)}</p>
          </div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5
                }
              }
            }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
          >
            {Object.entries(lastResult.subjectStats).map(([subject, stats]: [any, any]) => (
              <motion.div 
                key={subject} 
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 }
                }}
                className="p-4 bg-gray-50 rounded-2xl border border-gray-100"
              >
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">{subject}</p>
                <p className="text-xl font-bold text-gray-900">{stats.correct}/{stats.total}</p>
                <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(stats.correct / stats.total) * 100 || 0}%` }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className={`h-full ${
                      subject === 'Vật lí' ? 'bg-purple-500' :
                      subject === 'Hóa học' ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              onClick={() => setMode('home')}
              className="flex-1 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all"
            >
              Về trang chủ
            </button>
            <button
              onClick={() => startQuiz(quizType, selectedSubject || undefined, selectedTopic || undefined)}
              className="flex-1 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} /> Làm lại
            </button>
          </div>
        </motion.div>

        {/* Review Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Xem lại đáp án</h3>
          <div className="space-y-4">
            {currentQuestions.map((q, idx) => (
              <div key={idx} className={`p-6 bg-white rounded-3xl border-2 shadow-sm ${
                userAnswers[idx] === q.correctAnswer ? 'border-emerald-100' : 'border-rose-100'
              }`}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-gray-400 uppercase">Câu {idx + 1} • {q.subject}</span>
                    <p className="font-bold text-gray-900">{q.content}</p>
                  </div>
                  {userAnswers[idx] === q.correctAnswer ? (
                    <div className="p-2 bg-emerald-100 text-emerald-600 rounded-full">
                      <CheckCircle2 size={20} />
                    </div>
                  ) : (
                    <div className="p-2 bg-rose-100 text-rose-600 rounded-full">
                      <XCircle size={20} />
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {q.options.map((opt, oIdx) => (
                    <div 
                      key={oIdx}
                      className={`p-3 rounded-xl text-sm ${
                        oIdx === q.correctAnswer 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold'
                          : oIdx === userAnswers[idx]
                            ? 'bg-rose-50 text-rose-700 border border-rose-200'
                            : 'bg-gray-50 text-gray-500'
                      }`}
                    >
                      {String.fromCharCode(65 + oIdx)}. {opt}
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-4 rounded-2xl">
                  <p className="text-xs font-bold text-blue-600 uppercase mb-1">Giải thích</p>
                  <p className="text-sm text-blue-800 leading-relaxed">{q.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderHistory = () => (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Lịch sử làm bài</h2>
        <button 
          onClick={() => setMode('home')}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {history.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-[2.5rem] border border-gray-100 space-y-4">
          <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
            <BarChart3 size={40} className="text-gray-300" />
          </div>
          <p className="text-gray-500">Bạn chưa làm bài thi nào. Hãy bắt đầu ngay!</p>
          <button 
            onClick={() => setMode('home')}
            className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold"
          >
            Về trang chủ
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((res) => (
            <div key={res.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="font-bold text-gray-900">Kết quả: {res.score}/{res.totalQuestions}</p>
                <p className="text-xs text-gray-500">{res.date} • {formatTime(res.timeTaken)}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-gray-400 uppercase">Tỉ lệ</p>
                  <p className="font-bold text-blue-600">{Math.round((res.score / res.totalQuestions) * 100)}%</p>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                  (res.score / res.totalQuestions) >= 0.8 ? 'bg-emerald-100 text-emerald-600' :
                  (res.score / res.totalQuestions) >= 0.5 ? 'bg-blue-100 text-blue-600' : 'bg-rose-100 text-rose-600'
                }`}>
                  {Math.round((res.score / res.totalQuestions) * 100)}
                </div>
              </div>
            </div>
          ))}
          <button 
            onClick={() => {
              if (confirm('Xóa toàn bộ lịch sử?')) {
                setHistory([]);
                localStorage.removeItem('khtn_quiz_history');
              }
            }}
            className="w-full py-4 text-rose-600 font-bold hover:bg-rose-50 rounded-2xl transition-colors"
          >
            Xóa lịch sử
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => {
              setMode('home');
              setSelectedLevel('Tất cả');
            }}
          >
            <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform">
              <GraduationCap className="text-white w-5 h-5" />
            </div>
            <span className="font-black text-xl tracking-tight text-gray-900">KHTN<span className="text-blue-600">9</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => {
              setMode('home');
              setSelectedLevel('Tất cả');
            }} className={`text-sm font-bold transition-colors ${mode === 'home' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}>Trang chủ</button>
            <button onClick={() => setMode('history')} className={`text-sm font-bold transition-colors ${mode === 'history' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}>Lịch sử</button>
            <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-500 hover:text-gray-900">Tài liệu</a>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-xs font-bold text-gray-400 uppercase leading-none">Học sinh</span>
              <span className="text-sm font-bold text-gray-900">lan15062025</span>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              <span className="text-blue-600 font-bold">L</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-8 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {mode === 'home' && renderHome()}
            {mode === 'topic_select' && renderTopicSelect()}
            {mode === 'quiz' && renderQuiz()}
            {mode === 'result' && renderResult()}
            {mode === 'history' && renderHistory()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-12 border-t border-gray-100 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-xl">
                <GraduationCap className="text-white w-5 h-5" />
              </div>
              <span className="font-black text-xl tracking-tight">KHTN<span className="text-blue-600">9</span></span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Ứng dụng hỗ trợ ôn tập kiến thức Khoa học tự nhiên lớp 9, chuẩn bị cho kỳ thi tuyển sinh vào lớp 10 THPT.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Phân môn</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><button onClick={() => startQuiz('subject', 'Vật lí')} className="hover:text-blue-600">Vật lí</button></li>
              <li><button onClick={() => startQuiz('subject', 'Hóa học')} className="hover:text-blue-600">Hóa học</button></li>
              <li><button onClick={() => startQuiz('subject', 'Sinh học')} className="hover:text-blue-600">Sinh học</button></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Liên hệ</h4>
            <p className="text-sm text-gray-500">Email: lan15062025@gmail.com</p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
                <LayoutDashboard size={16} />
              </div>
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer">
                <BarChart3 size={16} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-50 text-center text-xs text-gray-400 font-medium">
          © 2026 KHTN9 Prep. All rights reserved. Built with Gemini AI.
        </div>
      </footer>
    </div>
  );
}
