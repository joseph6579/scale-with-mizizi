import { createHeader } from '../components/Header.js'
import { createFooter } from '../components/Footer.js'

export class StrategicPlanningPage {
  constructor() {
    this.name = 'StrategicPlanningPage'
  }

  render() {
    document.getElementById('app').innerHTML = `
      ${createHeader()}
      
      <main style="margin-top: 80px;">
        <!-- Hero Section -->
        <section class="section-large bg-primary text-white">
          <div class="container text-center">
            <h1 class="text-white">Strategic Financial Planning</h1>
            <p class="text-large">Data-driven strategies to optimize performance and accelerate growth</p>
          </div>
        </section>

        <!-- Overview -->
        <section class="section-large bg-white">
          <div class="container">
            <div class="grid grid-2" style="align-items: center;">
              <div>
                <h2>Transform Your Financial Strategy</h2>
                <p class="text-large">Strategic financial planning goes beyond budgeting and forecasting. It's about creating a comprehensive roadmap that aligns your financial resources with your business objectives.</p>
                <p>Our expert team combines deep financial expertise with advanced analytics to develop customized strategies that drive sustainable growth, optimize cash flow, and maximize shareholder value.</p>
                <a href="/contact" class="btn btn-primary" data-link>Schedule Strategy Session</a>
              </div>
              <div class="text-center">
                <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Strategic planning session" style="width: 100%; max-width: 500px; border-radius: 16px; box-shadow: var(--shadow-xl);">
              </div>
            </div>
          </div>
        </section>

        <!-- Services -->
        <section class="section bg-neutral-50">
          <div class="container">
            <div class="text-center mb-4">
              <h2>Strategic Planning Services</h2>
              <p class="text-large text-neutral-600">Comprehensive solutions for financial optimization</p>
            </div>
            
            <div class="grid grid-2">
              <div class="card">
                <div class="card-icon">📊</div>
                <h3>Financial Forecasting & Modeling</h3>
                <p>Advanced financial models that provide clear insights into future performance and scenario planning.</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                  <li>Multi-year financial projections</li>
                  <li>Scenario and sensitivity analysis</li>
                  <li>Monte Carlo simulations</li>
                  <li>Dynamic modeling frameworks</li>
                </ul>
                <a href="/contact" class="btn btn-outline mt-2" data-link>Learn More</a>
              </div>
              
              <div class="card">
                <div class="card-icon">💰</div>
                <h3>Cash Flow Optimization</h3>
                <p>Strategies to improve working capital management and optimize cash conversion cycles.</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                  <li>Working capital analysis</li>
                  <li>Cash flow forecasting</li>
                  <li>Payment terms optimization</li>
                  <li>Liquidity management</li>
                </ul>
                <a href="/contact" class="btn btn-outline mt-2" data-link>Get Started</a>
              </div>
              
              <div class="card">
                <div class="card-icon">🎯</div>
                <h3>Budget Planning & Control</h3>
                <p>Comprehensive budgeting processes that align resources with strategic objectives.</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                  <li>Zero-based budgeting</li>
                  <li>Rolling forecasts</li>
                  <li>Variance analysis</li>
                  <li>Performance dashboards</li>
                </ul>
                <a href="/contact" class="btn btn-outline mt-2" data-link>Explore Options</a>
              </div>
              
              <div class="card">
                <div class="card-icon">📈</div>
                <h3>Investment Strategy</h3>
                <p>Strategic guidance on capital allocation, investment priorities, and portfolio optimization.</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                  <li>Capital allocation frameworks</li>
                  <li>Investment evaluation</li>
                  <li>Portfolio optimization</li>
                  <li>ROI analysis</li>
                </ul>
                <a href="/contact" class="btn btn-outline mt-2" data-link>Schedule Consultation</a>
              </div>
              
              <div class="card">
                <div class="card-icon">🏢</div>
                <h3>Corporate Finance Strategy</h3>
                <p>Strategic financial structure optimization including debt management and capital structure planning.</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                  <li>Capital structure optimization</li>
                  <li>Debt refinancing strategies</li>
                  <li>Cost of capital analysis</li>
                  <li>Financial risk management</li>
                </ul>
                <a href="/contact" class="btn btn-outline mt-2" data-link>Discuss Strategy</a>
              </div>
              
              <div class="card">
                <div class="card-icon">🚀</div>
                <h3>Growth Strategy & Planning</h3>
                <p>Financial strategies to support sustainable growth including expansion planning and acquisition analysis.</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                  <li>Growth financing strategies</li>
                  <li>Market expansion planning</li>
                  <li>M&A financial analysis</li>
                  <li>Scalability assessments</li>
                </ul>
                <a href="/contact" class="btn btn-outline mt-2" data-link>Plan Growth</a>
              </div>
            </div>
          </div>
        </section>

        <!-- Process -->
        <section class="section-large bg-white">
          <div class="container">
            <div class="text-center mb-4">
              <h2>Our Strategic Planning Process</h2>
              <p class="text-large text-neutral-600">A proven methodology for developing effective financial strategies</p>
            </div>
            
            <div class="grid grid-3">
              <div class="text-center">
                <div class="section-number" style="margin: 0 auto 1rem;">1</div>
                <h4>Strategic Assessment</h4>
                <p>Comprehensive analysis of your current financial position, market conditions, and strategic objectives.</p>
              </div>
              
              <div class="text-center">
                <div class="section-number" style="margin: 0 auto 1rem;">2</div>
                <h4>Data Analysis</h4>
                <p>Deep dive into financial data, market trends, and performance metrics to identify opportunities and challenges.</p>
              </div>
              
              <div class="text-center">
                <div class="section-number" style="margin: 0 auto 1rem;">3</div>
                <h4>Strategy Development</h4>
                <p>Creation of customized financial strategies aligned with your business goals and risk tolerance.</p>
              </div>
              
              <div class="text-center">
                <div class="section-number" style="margin: 0 auto 1rem;">4</div>
                <h4>Financial Modeling</h4>
                <p>Development of sophisticated financial models to test scenarios and validate strategic assumptions.</p>
              </div>
              
              <div class="text-center">
                <div class="section-number" style="margin: 0 auto 1rem;">5</div>
                <h4>Implementation Planning</h4>
                <p>Detailed roadmap with specific actions, timelines, and success metrics for strategy execution.</p>
              </div>
              
              <div class="text-center">
                <div class="section-number" style="margin: 0 auto 1rem;">6</div>
                <h4>Monitoring & Optimization</h4>
                <p>Ongoing performance tracking and strategy refinement to ensure continued success and adaptation.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Key Benefits -->
        <section class="section bg-neutral-50">
          <div class="container">
            <div class="text-center mb-4">
              <h2>Strategic Planning Benefits</h2>
              <p class="text-large text-neutral-600">Why strategic financial planning is essential for business success</p>
            </div>
            
            <div class="grid grid-2">
              <div>
                <div class="card">
                  <h4>📊 Data-Driven Decisions</h4>
                  <p>Make informed financial decisions based on comprehensive analysis and advanced modeling rather than intuition alone.</p>
                </div>
                
                <div class="card">
                  <h4>🎯 Goal Alignment</h4>
                  <p>Ensure all financial activities are aligned with your strategic objectives and contribute to long-term success.</p>
                </div>
                
                <div class="card">
                  <h4>💰 Improved Profitability</h4>
                  <p>Optimize resource allocation and operational efficiency to maximize profitability and return on investment.</p>
                </div>
              </div>
              
              <div>
                <div class="card">
                  <h4>🛡️ Risk Management</h4>
                  <p>Identify and mitigate financial risks while positioning your business to capitalize on opportunities.</p>
                </div>
                
                <div class="card">
                  <h4>🚀 Accelerated Growth</h4>
                  <p>Create sustainable growth strategies that scale with your business and market opportunities.</p>
                </div>
                
                <div class="card">
                  <h4>📈 Enhanced Valuation</h4>
                  <p>Improve business valuation through strategic financial management and performance optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Case Study -->
        <section class="section-large bg-white">
          <div class="container">
            <div class="text-center mb-4">
              <h2>Success Story</h2>
              <p class="text-large text-neutral-600">How strategic planning transformed a client's business</p>
            </div>
            
            <div class="card" style="max-width: 800px; margin: 0 auto;">
              <div class="grid grid-2" style="align-items: center;">
                <div>
                  <h3>Manufacturing Company Transformation</h3>
                  <p>A mid-sized manufacturing company was struggling with cash flow issues and declining profitability despite growing revenues.</p>
                  
                  <h4>Our Solution:</h4>
                  <ul>
                    <li>Comprehensive financial analysis and cash flow modeling</li>
                    <li>Working capital optimization strategy</li>
                    <li>Capital structure restructuring</li>
                    <li>Performance monitoring dashboard</li>
                  </ul>
                </div>
                
                <div class="text-center">
                  <div class="grid grid-2" style="gap: 1rem;">
                    <div class="bg-neutral-50 p-3 border-radius-8">
                      <div style="font-size: 2rem; font-weight: 700; color: var(--primary-blue);">35%</div>
                      <p class="text-small mb-0">Cash Flow Improvement</p>
                    </div>
                    <div class="bg-neutral-50 p-3 border-radius-8">
                      <div style="font-size: 2rem; font-weight: 700; color: var(--primary-blue);">22%</div>
                      <p class="text-small mb-0">Profit Margin Increase</p>
                    </div>
                    <div class="bg-neutral-50 p-3 border-radius-8">
                      <div style="font-size: 2rem; font-weight: 700; color: var(--primary-blue);">18</div>
                      <p class="text-small mb-0">Months to Break Even</p>
                    </div>
                    <div class="bg-neutral-50 p-3 border-radius-8">
                      <div style="font-size: 2rem; font-weight: 700; color: var(--primary-blue);">$2.1M</div>
                      <p class="text-small mb-0">Additional Annual Profit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="section bg-primary text-white">
          <div class="container text-center">
            <h2 class="text-white">Ready to Optimize Your Financial Strategy?</h2>
            <p class="text-large mb-4">Let our experts help you develop a comprehensive financial strategy that drives results.</p>
            <div class="flex justify-center gap-4" style="flex-wrap: wrap;">
              <a href="/contact" class="btn btn-secondary" data-link>Schedule Strategy Session</a>
              <a href="/assessment" class="btn btn-outline" data-link style="color: white; border-color: white;">Start with Assessment</a>
            </div>
          </div>
        </section>
      </main>

      ${createFooter()}
    `
  }

  destroy() {
    // Cleanup if needed
  }
}