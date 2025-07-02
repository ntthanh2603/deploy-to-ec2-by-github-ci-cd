import { Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { send } from 'process';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/repo')
  getApp(@Res() res: Response) {
    res.send(`
     <!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deploy to EC2 by GitHub CI/CD - Repository Introduction</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 30px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .header p {
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 20px;
        }

        .github-link {
            display: inline-flex;
            align-items: center;
            background: #24292e;
            color: white;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 30px;
            font-weight: 600;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .github-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(36, 41, 46, 0.3);
        }

        .github-icon {
            margin-right: 8px;
            width: 20px;
            height: 20px;
        }

        .main-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 30px;
        }

        .card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card h2 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: #2c3e50;
            display: flex;
            align-items: center;
        }

        .card-icon {
            margin-right: 10px;
            font-size: 1.8rem;
        }

        .card p, .card li {
            color: #555;
            margin-bottom: 10px;
        }

        .card ul {
            padding-left: 20px;
        }

        .full-width-card {
            grid-column: 1 / -1;
        }

        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
        }

        .tech-badge {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
        }

        .workflow-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .step {
            background: rgba(103, 126, 234, 0.1);
            border-left: 4px solid #667eea;
            padding: 20px;
            border-radius: 10px;
            transition: all 0.3s ease;
        }

        .step:hover {
            background: rgba(103, 126, 234, 0.15);
            transform: translateX(5px);
        }

        .step-number {
            background: #667eea;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .step h3 {
            color: #2c3e50;
            margin-bottom: 8px;
            font-size: 1.1rem;
        }

        .benefits {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }

        .benefit {
            background: rgba(255, 255, 255, 0.7);
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            border: 2px solid transparent;
            transition: all 0.3s ease;
        }

        .benefit:hover {
            border-color: #667eea;
            background: rgba(255, 255, 255, 0.9);
        }

        .benefit-icon {
            font-size: 2rem;
            margin-bottom: 10px;
        }

        .footer {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .author-info {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 15px;
        }

        .author-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(45deg, #667eea, #764ba2);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.2rem;
        }

        @media (max-width: 768px) {
            .main-content {
                grid-template-columns: 1fr;
            }
            
            .header h1 {
                font-size: 2rem;
            }
            
            .workflow-steps {
                grid-template-columns: 1fr;
            }
            
            .benefits {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Deploy to EC2 by GitHub CI/CD</h1>
            <p>Automated deployment pipeline từ GitHub repository đến AWS EC2 instance</p>
            <a href="https://github.com/ntthanh2603/deploy-to-ec2-by-github-ci-cd" class="github-link" target="_blank">
                <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Xem Repository
            </a>
        </div>

        <div class="main-content">
            <div class="card">
                <h2><span class="card-icon">📋</span>Mô tả Dự án</h2>
                <p>Repository này cung cấp một giải pháp hoàn chỉnh để triển khai tự động ứng dụng web từ GitHub repository đến AWS EC2 instance sử dụng GitHub Actions CI/CD pipeline.</p>
                <p>Dự án được thiết kế để đơn giản hóa quy trình deployment và đảm bảo tính nhất quán trong việc triển khai ứng dụng.</p>
            </div>

            <div class="card">
                <h2><span class="card-icon">🎯</span>Mục tiêu</h2>
                <ul>
                    <li>Tự động hóa quy trình deployment</li>
                    <li>Giảm thiểu thời gian và lỗi thủ công</li>
                    <li>Đảm bảo tính nhất quán của deployment</li>
                    <li>Tích hợp testing và quality checks</li>
                    <li>Monitoring và logging deployment</li>
                </ul>
            </div>

            <div class="card full-width-card">
                <h2><span class="card-icon">⚡</span>Công nghệ sử dụng</h2>
                <div class="tech-stack">
                    <span class="tech-badge">GitHub Actions</span>
                    <span class="tech-badge">AWS EC2</span>
                    <span class="tech-badge">SSH</span>
                    <span class="tech-badge">Docker</span>
                    <span class="tech-badge">YAML</span>
                    <span class="tech-badge">Shell Scripts</span>
                    <span class="tech-badge">Node.js</span>
                    <span class="tech-badge">AWS CLI</span>
                </div>
            </div>

            <div class="card full-width-card">
                <h2><span class="card-icon">🔄</span>Workflow CI/CD</h2>
                <div class="workflow-steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <h3>Code Push</h3>
                        <p>Developer push code lên GitHub repository</p>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <h3>Trigger Actions</h3>
                        <p>GitHub Actions tự động được kích hoạt</p>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <h3>Build & Test</h3>
                        <p>Thực hiện build và chạy test cases</p>
                    </div>
                    <div class="step">
                        <div class="step-number">4</div>
                        <h3>Deploy to EC2</h3>
                        <p>Triển khai ứng dụng lên EC2 instance</p>
                    </div>
                    <div class="step">
                        <div class="step-number">5</div>
                        <h3>Health Check</h3>
                        <p>Kiểm tra tình trạng ứng dụng sau deployment</p>
                    </div>
                    <div class="step">
                        <div class="step-number">6</div>
                        <h3>Notification</h3>
                        <p>Thông báo kết quả deployment</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2><span class="card-icon">✨</span>Tính năng chính</h2>
                <ul>
                    <li>Automated deployment pipeline</li>
                    <li>Environment-specific configurations</li>
                    <li>Rollback mechanisms</li>
                    <li>Security best practices</li>
                    <li>Monitoring và alerting</li>
                    <li>Multi-environment support</li>
                    <li>Database migration support</li>
                </ul>
            </div>

            <div class="card">
                <h2><span class="card-icon">📦</span>Cấu trúc Project</h2>
                <ul>
                    <li><code>.github/workflows/</code> - GitHub Actions workflows</li>
                    <li><code>scripts/</code> - Deployment scripts</li>
                    <li><code>configs/</code> - Configuration files</li>
                    <li><code>docs/</code> - Documentation</li>
                    <li><code>tests/</code> - Test files</li>
                    <li><code>docker/</code> - Docker configurations</li>
                </ul>
            </div>

            <div class="card full-width-card">
                <h2><span class="card-icon">🎉</span>Lợi ích</h2>
                <div class="benefits">
                    <div class="benefit">
                        <div class="benefit-icon">⚡</div>
                        <h3>Tốc độ</h3>
                        <p>Deployment nhanh chóng và tự động</p>
                    </div>
                    <div class="benefit">
                        <div class="benefit-icon">🔒</div>
                        <h3>Bảo mật</h3>
                        <p>Tuân thủ security best practices</p>
                    </div>
                    <div class="benefit">
                        <div class="benefit-icon">🎯</div>
                        <h3>Chính xác</h3>
                        <p>Giảm thiểu lỗi human error</p>
                    </div>
                    <div class="benefit">
                        <div class="benefit-icon">📊</div>
                        <h3>Monitoring</h3>
                        <p>Theo dõi và logging chi tiết</p>
                    </div>
                    <div class="benefit">
                        <div class="benefit-icon">🔄</div>
                        <h3>Rollback</h3>
                        <p>Khả năng rollback nhanh chóng</p>
                    </div>
                    <div class="benefit">
                        <div class="benefit-icon">🌍</div>
                        <h3>Multi-env</h3>
                        <p>Hỗ trợ nhiều môi trường</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="author-info">
                <div class="author-avatar">NT</div>
                <div>
                    <h3>Nguyễn Thành Thành</h3>
                    <p>DevOps Engineer & Developer</p>
                </div>
            </div>
            <p>© 2025 - Repository này được tạo để chia sẻ kiến thức về CI/CD và AWS deployment.</p>
            <p>🚀 Happy Coding & Deploying!</p>
        </div>
    </div>

    <script>
        // Add smooth scroll animation for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add loading animation for external links
        document.querySelectorAll('a[target="_blank"]').forEach(link => {
            link.addEventListener('click', function() {
                this.style.opacity = '0.7';
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 1000);
            });
        });

        // Add hover effects for cards
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add typing effect for the main title
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Initialize typing effect on page load
        window.addEventListener('load', () => {
            const title = document.querySelector('.header h1');
            const originalText = title.textContent;
            typeWriter(title, originalText, 80);
        });
    </script>
</body>
</html>
    `);
  }
}
